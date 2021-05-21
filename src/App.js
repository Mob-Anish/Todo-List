import {Component} from 'react';
import classes from './App.module.css';
import {MdDone} from 'react-icons/md';
import {MdDelete} from 'react-icons/md';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: '',
      list: [],
    };
  }

  // Update state
  updateData = (event) => {
    this.setState({
      userData: event.target.value,
    });
  };

  addItem = (e) => {
    e.preventDefault();
    // If there is data in input box
    if (this.state.userData !== '') {
      console.log(this.state.userData);
      const data = {
        id: Math.random(),
        value: this.state.userData,
      };

      const list = [...this.state.list];
      list.push(data);

      // Update list and clearing userData value in input form for next.
      this.setState({
        userData: '',
        list,
      });
    }
  };

  deleteItem = (id) => {
    const List = [...this.state.list];

    // Select only undeleted item from list.
    const updatedList = List.filter((listItem) => listItem.id !== id);

    // Update the list
    this.setState({
      list: updatedList,
    });
  };

  render() {
    const style = {
      fontSize: '2.4rem',
    };

    return (
      <div className={classes.App}>
        <div className={classes.Cover}></div>
        <div className={classes.Todo}>
          <form className={classes.form} onSubmit={this.addItem}>
            <input
              type="text"
              value={this.state.userData}
              className={classes.input}
              onChange={this.updateData}
              placeholder="Add your to-do list . . . ."
            ></input>
            <button className={classes.button}>
              <MdDone className={classes.mdone} />
            </button>
          </form>
          <div className={classes.List}>
            <ul>
              {this.state.list.map((data) => {
                return (
                  <div className={classes.listers}>
                    <li key={Math.random()}>{data.value}</li>
                    <button
                      className={classes.delbutton}
                      onClick={this.deleteItem.bind(this, data.id)}
                    >
                      <MdDelete style={style} />
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
