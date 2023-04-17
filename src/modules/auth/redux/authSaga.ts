import { PayloadAction } from '@reduxjs/toolkit';
import { LoginPayLoad } from 'modules/auth/models/auth';
import { call, fork, put, take, takeLatest } from 'redux-saga/effects';
import { authActions } from './authSlice';

function* handleLogin(payload: LoginPayLoad) {
  try {
    yield put(
      authActions.loginSuccess({
        name: 'Dương Đức Anh',
        email: 'anhdd@gmail.com',
        passwordHash: 'abc',
        phone: '0868766943',
        avatar: 'https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/270054287_1921412068042956_7728596908002705090_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3musH1zA8nYAX_2zohO&_nc_ht=scontent-nrt1-2.xx&oh=00_AfA51o2sO-bwsAF-o4SiYv59Eu0fZeW43xifm74yz3f57A&oe=644257E3'
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
