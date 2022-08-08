import { all } from 'redux-saga/effects';
import paramsSagaWatcher from './paramsSaga';

export default function* rootSaga() {
  yield all([
    paramsSagaWatcher(),
  ])
  // code after all-effect
}
