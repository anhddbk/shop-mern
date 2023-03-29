import { AuthState } from "components/auth/types";

export const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined,
}