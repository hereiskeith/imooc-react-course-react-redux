import React, { Component } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import store from './Store';
import { getInitList, getInputChangeAction, addItemAction, deleteItemAction } from "./Store/actionCreators";
import TodoListUI from './TodoListUI';



class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  handleInputValueChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleClick() {
    const action = addItemAction();
    store.dispatch(action);
  }

  handleDelete(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
  render() {
    return <TodoListUI
      inputValue={this.state.inputValue}
      handleInputValueChange={this.handleInputValueChange}
      handleClick={this.handleClick}
      handleDelete={this.handleDelete}
      list={this.state.list}
    />
  }
  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);


      //下面代码是使用redux-thunk时的代码
      // const action = getTodoList();
      // store.dispatch(action);
      //dispatch后action函数自动执行
    //})
  }
}

export default Todolist;