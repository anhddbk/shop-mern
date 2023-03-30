import { AuthState } from 'components/LoginPage/types';

export const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};
