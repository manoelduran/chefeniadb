import { Reducer } from 'redux';
import * as types from './types';

const initialState: types.MvpState = {
    mvp: {} as Mvp,
    isLoading: false,
    error: null,
};

const mvpReducer: Reducer<types.MvpState> = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_MVP_START:
            return {
                ...state,
                isLoading: true,
                payload: action.payload,
            };
        case types.LOAD_MVP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                mvp: action.payload,
            };
        case types.LOAD_MVP_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default mvpReducer;