import * as types from './types';

export const loadMvpsStart = (mvps: Mvp[]) => {
    return {
        type: types.LOAD_MVPS_START,
        payload: mvps,
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