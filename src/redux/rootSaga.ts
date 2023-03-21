import authSaga from 'modules/auth/redux/authSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga()]);
}
