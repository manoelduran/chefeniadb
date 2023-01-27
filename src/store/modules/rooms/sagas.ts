import * as types from './types';
import {
    put,
    all,
    delay,
    call,
    takeLatest
} from 'redux-saga/effects';
import {
    loadRoomsSuccess,
    loadRoomsError
} from './actions';
import { AxiosResponse } from 'axios';
import { getRooms } from '../../../services/api';


function* onLoadRoomsStartAsync() {
    try {
        const response: AxiosResponse<Room[]> = yield call(getRooms);
     
        if (response) {
            yield delay(500); // setTimeOut
            yield put(loadRoomsSuccess(response.data));
        };
    } catch (error: any) {
        yield put(loadRoomsError(error.response.data));
    }
};
export default all([takeLatest(types.LOAD_ROOMS_START, onLoadRoomsStartAsync)]);
