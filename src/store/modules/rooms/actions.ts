import * as types from './types';

export const loadRoomsStart = (rooms: Room[]) => {
    return {
        type: types.LOAD_ROOMS_START,
        payload: rooms,
    }
};

export const loadRoomsSuccess = (rooms: Room[]) => {
    return {
        type: types.LOAD_ROOMS_SUCCESS,
        payload: rooms,
    }
};

export const loadRoomsError = (error: any) => {
    return {
        type: types.LOAD_ROOMS_ERROR,
        payload: error,
    }

};