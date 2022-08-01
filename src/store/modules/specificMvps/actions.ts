import * as types from './types';

export const loadSpecificMvpsStart = (room: string, specificMvps: Mvp[]) => {
    console.log('roomAction', room, specificMvps)
    return {
        type: types.LOAD_SPECIFIC_MVPS_START,
        payload: {
            room,
            specificMvps
        }
    }
};

export const loadSpecificMvpsSuccess = (specificMvps: Mvp[]) => {
    return {
        type: types.LOAD_SPECIFIC_MVPS_SUCCESS,
        payload: specificMvps,
    }
};

export const loadSpecificMvpsError = (error: any) => {
    return {
        type: types.LOAD_SPECIFIC_MVPS_ERROR,
        payload: error,
    }

};