import { PayloadAction } from '@reduxjs/toolkit';
import { LoginPayLoad } from 'modules/auth/models/auth';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { authActions } from './authSlice';

function* handleLogin(payload: LoginPayLoad) {
  try {
    yield put(
      authActions.loginSuccess({
        name: 'Dương Đức Anh',
        email: 'anhdd@gmail,com',
        passwordHash: 'abc',
        phone: '0868766943',
      })
    );
    console.log('failure');
  } catch {
    yield put(authActions.loginFailure);
  }
}

function* handleLogout() {}

function* watchLoginFlow() {
  //lấy action -> đợi khi nào dispatch action login thì đi tiếp
  const action: PayloadAction<LoginPayLoad> = yield takeLatest(
    authActions.loginStart.type,
    function* () {
      // thực hiện hành động
      yield fork(handleLogin, action.payload);
    }
  );
  //lấy action -> đợi khi nào dispatch action logout thì đi tiếp
  yield take(authActions.logout.type);
  // thực hiện hành động
  yield call(handleLogout);
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
