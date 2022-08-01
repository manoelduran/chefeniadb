import { Reducer } from 'redux';
import * as types from './types';

const initialState: types.SpecificMvpsState = {
    specificMvps: [],
    isLoading: false,
    error: null,
};

const specificMvpsReducer: Reducer<types.SpecificMvpsState> = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_SPECIFIC_MVPS_START:
            return {
                ...state,
                isLoading: true,
                payload: action.payload,
            };
        case types.LOAD_SPECIFIC_MVPS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                specificMvps: action.payload,
            };
        case types.LOAD_SPECIFIC_MVPS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default specificMvpsReducer;