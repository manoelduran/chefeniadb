import { Reducer } from 'redux';
import * as types from './types';

const initialState: types.RoomsState = {
    rooms: [],
    isLoading: false,
    error: null,
};

const roomsReducer: Reducer<types.RoomsState> = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_ROOMS_START:
            return {
                ...state,
                isLoading: true,
                payload: action.payload,
            };
        case types.LOAD_ROOMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                rooms: action.payload,
            };
        case types.LOAD_ROOMS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default roomsReducer;