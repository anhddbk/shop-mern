import { PayloadAction } from '@reduxjs/toolkit';
import { LoginPayLoad } from 'modules/auth/models/auth';
import { call, fork, put, take } from 'redux-saga/effects';
import { authActions } from './authSlice';

function* handleLogin(payload: LoginPayLoad) {
  try {
    yield put(
      authActions.loginSuccess({
        id: '1',
        name: 'Dương Đức Anh',
        username: 'abc',
      })
    );
  } catch {
    yield put(authActions.loginFailure);
  }
}

function* handleLogout() {}

function* watchLoginFlow() {
  //lấy action -> đợi khi nào dispatch action login thì đi tiếp
  const action: PayloadAction<LoginPayLoad> = yield take(authActions.loginStart.type);
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
