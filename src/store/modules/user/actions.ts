import * as types from './types';
import { UserState } from './types';


export const saveUserStart = (credentials: FormUser, data: UserState) => {
    return {
        type: types.userActionTypes.LOAD_SAVE_USER_START,
        payload: {
            credentials,
            data
        },
    }
}


export const saveUserSuccess = (data: UserState) => {
    console.log('data do sucesso', data)
    return {
        type: types.userActionTypes.LOAD_SAVE_USER_SUCCESS,
        payload: data,
    }
};

export const saveUserError = (error: any) => {
    return {
        type: types.userActionTypes.LOAD_SAVE_USER_ERROR,
        payload: error,
    }
};

export const updateUser = (user: User) => {
    return {
        type: types.userActionTypes.LOAD_UPDATE_USER,
        payload: user,
    }
};

export const logoutUser = () => {
    return {
        type: types.userActionTypes.LOAD_LOGOUT_USER,
        payload: {
        },
    }
}

