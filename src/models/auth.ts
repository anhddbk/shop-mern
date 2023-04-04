import { User } from "models";

export interface LoginPayLoad {
    username: string;
    password: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
  }