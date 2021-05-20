import {MdDelete} from 'react-icons/md';
import styled from 'styled-components';

const list = (props) => {
  const Listers = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 1.5rem;
  `;

  const style = {
    position: 'absolute',
    right: '0',
    height: '100%',
    fontSize: '2.4rem',
    cursor: 'pointer',
    borderRadius: '0.5rem',
    background: 'red',
    color: 'white',
    alignItems: 'center',
    width: '5rem',
    padding: '1rem'
  };

  return props.dataList.map((data) => {
    return (
      <Listers>
        <li key={data.id}>{data.value}</li>
        <MdDelete className="hell" style={style} />
      </Listers>
    );
  });
};
export default list;
