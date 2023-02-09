import { all } from 'redux-saga/effects';

import mvps from './mvps/sagas';
import user from './user/sagas';
import rooms from './rooms/sagas';



export default function* rootSaga() {
  // return yield all([mvps, specificMvps, mvp, filterMvp, rooms]);
  return  yield all([mvps , rooms, user]);
}
