import {Component} from 'react';
import classes from './App.module.css';
import {MdDone} from 'react-icons/md';
import List from './List/List.js';

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
        list,
        userData: '',
      });
      console.log(this.state.list);
    }
  };

  render() {
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
              <List dataList={this.state.list} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
