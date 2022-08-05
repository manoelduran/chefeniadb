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
    loadMvpSuccess,
    loadMvpError
} from './actions';
import { AxiosResponse } from 'axios';
import { api, getMvp } from '../../../services/api';
import { onSendCallForMvpStart } from './types';


function* onLoadMvpStartAsync({ payload }: onSendCallForMvpStart) {
    const { name } = payload;
    try {
        const response: AxiosResponse<Mvp> = yield call(getMvp, name);
        if (response) {
            yield delay(500); // setTimeOut
            yield put(loadMvpSuccess(response.data));
        };
    } catch (error: any) {
        yield put(loadMvpError(error.response.data));
    }
};
export default all([takeLatest(types.LOAD_MVP_START, onLoadMvpStartAsync)]);