import * as types from './types';
import {
    takeEvery,
    put,
    all,
    delay,
    fork,
    call,
    takeLatest
} from 'redux-saga/effects';
import {
    loadFilterMvpSuccess,
    loadFilterMvpError
} from './actions';
import { AxiosResponse } from 'axios';
import { api, getMvp } from '../../../services/api';
import { onSendCallForFilterMvpStart } from './types';


function* onLoadFilterMvpStartAsync({ payload }: onSendCallForFilterMvpStart) {
    const { name } = payload;
    console.log('payload', payload);
    try {
        const response: AxiosResponse<Mvp> = yield call(getMvp, name);
        if (response) {
            yield delay(500); // setTimeOut
            yield put(loadFilterMvpSuccess(response.data));
        };
    } catch (error: any) {
        yield put(loadFilterMvpError(error.response.data));
    }
};
export default all([takeLatest(types.LOAD_FILTER_MVP_START, onLoadFilterMvpStartAsync)]);