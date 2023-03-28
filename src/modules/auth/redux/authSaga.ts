import { NavigateFunction } from 'react-router-dom';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayLoad } from './authSlice';

function* handleLogin(payload: LoginPayLoad) {}

function* handleLogout() {}

function* watchLoginFlow() {
  //lấy action -> đợi khi nào dispatch action login thì đi tiếp
  const action: PayloadAction<LoginPayLoad> = yield take(authActions.login.type);
  // thực hiện hành động
  yield fork(handleLogin, action.payload);
  //lấy action -> đợi khi nào dispatch action logout thì đi tiếp
  yield take(authActions.logout.type);
  // thực hiện hành động
  yield call(handleLogout);
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
