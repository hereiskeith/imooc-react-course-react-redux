import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreators';

function* getInitList() {
  try {
    const res = yield axios.get('https://www.easy-mock.com/mock/5d37725c27bd3673152299e9/home/list');
    const action = initListAction(res.data);
    yield put(action);
  }catch(e) {
    console.log('list request failed');
  }

}

// generator function
function* todoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;