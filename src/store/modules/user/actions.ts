import * as types from './types';
import { UserState } from './types';


export const saveUser = (data: UserState) => {
    return {
        type: types.userActionTypes.LOAD_SAVE_USER,
        payload: data,
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
        payload: {},
    }
}