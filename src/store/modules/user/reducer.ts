import { Reducer } from 'redux';
import * as types from './types';

const initialState: types.UserState = {
    isLoading: false,
    user: null,
    token: null,
    refreshToken: null,
    userType: null,
    isSigned: false,
    error: null,
};

const userReducer: Reducer<types.UserState> = (state = initialState, action) => {
    switch (action.type) {
        case types.userActionTypes.LOAD_SAVE_USER_START:
            console.log('LOAD_SAVE_USER_START', action.payload)
            console.log('LOAD_SAVE_USER_START', state)
            return {
                ...state,
                isLoading: true,
                payload: action.payload,
            };
        case types.userActionTypes.LOAD_SAVE_USER_SUCCESS:
            console.log('LOAD_SAVE_USER_SUCCESS', action.payload)
            console.log('LOAD_SAVE_USER_SUCCESS', state)

            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token,
                refreshToken: action.payload.refreshToken

            };
        case types.userActionTypes.LOAD_SAVE_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case types.userActionTypes.LOAD_UPDATE_USER:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case types.userActionTypes.LOAD_LOGOUT_USER:
            console.log('LOAD_LOGOUT_USER', action.payload)
            console.log('LOAD_LOGOUT_USER', state)
            return {
                state:  {
                    isLoading: false,
                    user: null,
                    token: null,
                    refreshToken: null,
                    userType: null,
                    isSigned: false,
                    error: null,
                }
            }
        default:
            return state;
    }
};

export default userReducer;