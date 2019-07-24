import { GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'


export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value,
});

export const addItemAction = () => ({
  type: ADD_TODO_ITEM,
});

export const deleteItemAction = (value) => ({
  type: DELETE_TODO_ITEM,
  value,
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data,
});

export const getInitList = () => ({
  type: GET_INIT_LIST,
});


//使用了redux-thunk后函数return的结果可以是函数了

// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('https://www.easy-mock.com/mock/5d37725c27bd3673152299e9/home/list').then((res) => {
//       const data = res.data;
//       const action = initListAction(data);
//       dispatch(action);
//     })
//   }
// };

