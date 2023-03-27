import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayLoad } from './authSlice';


function* handleLogin(payload: LoginPayLoad) {
  try {
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSuccess({
        id: 'abc',
        name: 'abc',
        username: 'abc',
      })
    );
  } catch (error) {
    console.log('loggin failed');
  }
  //redirect to admin page
}

function* handleLogout() {
  localStorage.removeItem('access_token');
  yield
  //redirect to login page
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayLoad> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }
    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
