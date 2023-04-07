import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from './../models/auth';
import { RootState } from 'redux/store';
import { LoginPayLoad } from 'modules/auth/models/auth';
import { User } from '../models/user';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state, action: PayloadAction<LoginPayLoad>) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});
// Actions => gửi tới reducer để thay đổi state
export const authActions = authSlice.actions;

// Selectors => truy xuất state
export const selectIsLoggedIn = (state: RootState) => state.rootReducer.auth.isAuthenticated;
export const selectUser = (state: RootState) =>
  state.rootReducer.auth.user ?? { id: '', name: '', username: '' };
export const select = (state: RootState) => state.rootReducer.auth.error;

// Reducer => xử lý action và trả về state mới
const authReducer = authSlice.reducer;
export default authReducer;
