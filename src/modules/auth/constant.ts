import { AuthState } from 'models/auth';

export const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};
