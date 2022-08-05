import * as types from './types';

export const loadFilterMvpStart = (name: string, mvp: Mvp) => {
    return {
        type: types.LOAD_FILTER_MVP_START,
        payload: {
            name,
            mvp,
        },
    }
};

export const loadFilterMvpSuccess = (mvp: Mvp) => {
    return {
        type: types.LOAD_FILTER_MVP_SUCCESS,
        payload: mvp,
    }
};

export const loadFilterMvpError = (error: any) => {
    return {
        type: types.LOAD_FILTER_MVP_ERROR,
        payload: error,
    }

};