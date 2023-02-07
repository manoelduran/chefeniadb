
export enum userActionTypes {
    LOAD_SAVE_USER = 'LOAD_SAVE_USER',
    LOAD_UPDATE_USER = 'LOAD_UPDATE_USER',
    LOAD_LOGOUT_USER = 'LOAD_LOGOUT_USER'
}

export interface UserState {
    isLoading: boolean;
    user: User | null;
    token: string;
    refreshToken: string;
    userType: string;
    isSigned: boolean;
    error: string | null;
}