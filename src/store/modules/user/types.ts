import { saveUserStart } from "./actions";

export enum userActionTypes {
    LOAD_SAVE_USER_START = 'LOAD_SAVE_USER_START',
    LOAD_SAVE_USER_SUCCESS = 'LOAD_SAVE_USER_SUCCESS',
    LOAD_SAVE_USER_ERROR = 'LOAD_SAVE_USER_ERROR',
    LOAD_UPDATE_USER = 'LOAD_UPDATE_USER',
    LOAD_LOGOUT_USER = 'LOAD_LOGOUT_USER'
}

export type onSendCallForShowSaveUser = ReturnType<typeof saveUserStart>

export interface UserState {
    isLoading: boolean;
    user: User | null;
    token: string | null;
    refreshToken: string | null;
    userType: string | null;
    isSigned: boolean;
    error: string | null;
}