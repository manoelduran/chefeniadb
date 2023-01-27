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
import { api, getMvpsByRoomId } from '../../../services/api';


function* onLoadMvpsStartAsync() {
    try {
        const response: AxiosResponse<Mvp[]> = yield call(getMvpsByRoomId);
        console.log('reduxResponse', response)
        if (response) {
            yield delay(500); // setTimeOut
            yield put(loadMvpsSuccess(response.data));
        };
    } catch (error: any) {
        yield put(loadMvpsError(error.response.data));
    }
};
export default all([takeLatest(types.LOAD_MVPS_START, onLoadMvpsStartAsync)]);
// export default function* rootSaga() {
//     yield all([...mvpSagas]);
// };