import { fork } from 'redux-saga/effects';
function* watchLoginFlow() {}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
