import React from 'react';
import {Button, Input, List} from "antd";
//无状态组件：函数
const TodoListUI = (props) => {
  return (
    <div style={{marginTop:'10px', marginLeft:'10px'}}>
      <div>
        <Input
          value={props.inputValue}
          placeholder='Todo'
          style={{width: '400px', marginRight: '10px'}}
          onChange={props.handleInputValueChange}
        />
        <Button type="primary" onClick={props.handleClick}>Submit</Button>
      </div>
      <List
        style={{marginTop: '10px', width: '400px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => {props.handleDelete(index)}}>{item}</List.Item>
        )}
      />
    </div>
  )
};


export default TodoListUI;

/*class TodoListUI extends Component {
  render() {
    return(
      <div style={{marginTop:'10px', marginLeft:'10px'}}>
        <div>
          <Input
            value={this.props.inputValue}
            placeholder='Todo'
            style={{width: '400px', marginRight: '10px'}}
            onChange={this.props.handleInputValueChange}
          />
          <Button type="primary" onClick={this.props.handleClick}>Submit</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '400px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {this.props.handleDelete(index)}}>{item}</List.Item>
          )}
        />
      </div>
    )
  }
}*/
