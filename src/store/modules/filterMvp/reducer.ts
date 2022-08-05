import { Reducer } from 'redux';
import * as types from './types';

const initialState: types.FilterMvpState = {
    mvp: {} as Mvp,
    isLoading: false,
    error: null,
};

const filterMvpReducer: Reducer<types.FilterMvpState> = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_FILTER_MVP_START:
            return {
                ...state,
                isLoading: true,
                payload: action.payload,
            };
        case types.LOAD_FILTER_MVP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                mvp: action.payload,
            };
        case types.LOAD_FILTER_MVP_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default filterMvpReducer;