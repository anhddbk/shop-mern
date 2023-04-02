import { User } from "models";

export interface LoginPayLoad {
    username: string;
    password: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
}