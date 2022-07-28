import { Reducer } from 'redux';
import * as types from './types';

const initialState: types.MvpsState = {
    mvps: [],
    isLoading: false,
    error: null,
};

const mvpsReducer: Reducer<types.MvpsState> = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_MVPS_START:
            return {
                ...state,
                isLoading: true,
                payload: action.payload,
            };
        case types.LOAD_MVPS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                mvps: action.payload,
            };
        case types.LOAD_MVPS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default mvpsReducer;