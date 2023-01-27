import * as types from './types';

export const loadMvpsStart = (room_id: string, mvps: Mvp[]) => {
    console.log('room_id', room_id)
    return {
        type: types.LOAD_MVPS_START,
        payload: {
            room_id,
            mvps
        },
    }
};

export const loadMvpsSuccess = (mvps: Mvp[]) => {
    return {
        type: types.LOAD_MVPS_SUCCESS,
        payload: mvps,
    }
};

export const loadMvpsError = (error: any) => {
    return {
        type: types.LOAD_MVPS_ERROR,
        payload: error,
    }

};