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
    loadMvpsSuccess,
    loadMvpsError
} from './actions';
import { AxiosResponse } from 'axios';
import { api, getMvps } from '../../../services/api';


function* onLoadMvpsStartAsync() {
    try {
        const response: AxiosResponse<Mvp[]> = yield call(getMvps);
        if (response) {
            yield delay(500); // setTimeOut
            yield put(loadMvpsSuccess(response.data));
        };
    } catch (error: any) {
        yield put(loadMvpsError(error.response.data));
    }
};

function* onLoadMvps() {
    yield takeLatest(types.LOAD_MVPS_START, onLoadMvpsStartAsync);
};

const mvpSagas = [
    fork(onLoadMvps),
];

export default function* rootSaga() {
    yield all([...mvpSagas]);
};