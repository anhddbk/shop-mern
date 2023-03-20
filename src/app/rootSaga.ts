import { PayloadAction } from '@reduxjs/toolkit';
import { all, takeEvery } from 'redux-saga/effects';

function* helloSaga() {
  console.log('Hello Sagas!');
}

function* log(action: PayloadAction) {
  console.log('Log', action);
}

function* countSaga() {
  console.log('count Sagas!');
  yield takeEvery('*', log);
}

export default function* rootSaga() {
  console.log('root Saga');
  yield all([helloSaga(), countSaga()]);
}
