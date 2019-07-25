import React from 'react';
import { connect } from 'react-redux';

const Todolist = (props) => {
  const {list, inputValue, changeInputValue, handleBtnClick, handleDelete } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue}/>
        <button onClick={handleBtnClick}>Submit</button>
      </div>
      <ul>
        {list.map((item,index) => {
          return (
            <li onClick={() => {handleDelete(index)}} key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value,
      };
      dispatch(action);
    },
    handleBtnClick() {
      const action = {
        type: 'list_item_change',
      };
      dispatch(action);
    },
    handleDelete(index) {
      const action = {
        type: 'delete_item',
        index,
      };
      dispatch(action);
    }
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);