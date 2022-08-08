import { call, put, takeEvery, takeLatest, delay, throttle } from 'redux-saga/effects';
import axios from 'axios';
import { findParams, setFindParams } from '../actions/findParamsAC';

const fetchParams = async (paramsUser) => {
  const responseFromBack = await axios.post('http://localhost:3001/find/',  paramsUser);
  return responseFromBack.data;
}

function* paramsSagaWorker(action) {
  try {
    
    const resultArr = yield call(fetchParams, action.payload);
    yield put(setFindParams(resultArr));
  } catch (e) {
    yield put(setFindParams ([{ text: 'Ошибка', name:'текст не найден'}]));
  }
}

function* paramsSagaWatcher() {
  yield takeLatest("GET_PARAMS", paramsSagaWorker);
}


export default paramsSagaWatcher;
