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
    saveUserStart,
    saveUserSuccess,
    updateUser,
    logoutUser,
    saveUserError
} from './actions';
import { AxiosResponse } from 'axios';
import { authUser } from '../../../services/api';
import { onSendCallForShowSaveUser, UserState } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';


function* onLoadSaveUserStartAsync({ payload }: onSendCallForShowSaveUser) {
    const { credentials } = payload;
    try {
        const response: AxiosResponse<UserState> = yield call(authUser, credentials);
        if (response) {
            yield AsyncStorage.setItem('CHEFENIADB@user', JSON.stringify(response.data))
            yield delay(500); // setTimeOut
            yield put(saveUserSuccess(response.data));
        };
    } catch (error: any) {
        yield put(saveUserError(error.response.data));
    }
};

export default all([takeLatest(types.userActionTypes.LOAD_SAVE_USER_START, onLoadSaveUserStartAsync)]);
// export default function* rootSaga() {
//     yield all([...mvpSagas]);
// };