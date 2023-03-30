import { initialState } from './../constant';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginPayLoad } from 'components/LoginPage/types';
import { User } from 'models/index';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayLoad>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});
// Actions => gửi tới reducer để thay đổi state
export const authActions = authSlice.actions;

// Selectors => truy xuất state
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;

// Reducer => xử lý action và trả về state mới
const authReducer = authSlice.reducer;
export default authReducer;
