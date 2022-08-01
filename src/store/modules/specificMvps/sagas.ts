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
    loadSpecificMvpsSuccess,
    loadSpecificMvpsError
} from './actions';
import { AxiosResponse } from 'axios';
import { api, getSpecificMvps } from '../../../services/api';
import { onSendCallForSpecificMvpsStart } from './types';


function* onLoadSpecificMvpsStartAsync({ payload }: onSendCallForSpecificMvpsStart) {
    const {room} = payload;
    try {
        const response: AxiosResponse<Mvp[]> = yield call(getSpecificMvps, room);
        console.log('responseSaga', response)
        if (response) {
            yield delay(500); // setTimeOut
            yield put(loadSpecificMvpsSuccess(response.data));
        };
    } catch (error: any) {
        yield put(loadSpecificMvpsError(error.response.data));
    }
};

export default all([takeLatest(types.LOAD_SPECIFIC_MVPS_START, onLoadSpecificMvpsStartAsync)]);
// export default function* rootSaga() {
//     yield all([...specificMvpsSagas]);
// };