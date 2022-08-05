import * as types from './types';

export const loadMvpStart = (name: string, mvp: Mvp) => {
    return {
        type: types.LOAD_MVP_START,
        payload: {
            name,
            mvp,
        },
    }
};

export const loadMvpSuccess = (mvp: Mvp) => {
    return {
        type: types.LOAD_MVP_SUCCESS,
        payload: mvp,
    }
};

export const loadMvpError = (error: any) => {
    return {
        type: types.LOAD_MVP_ERROR,
        payload: error,
    }

};