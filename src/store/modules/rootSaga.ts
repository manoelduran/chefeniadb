import { all } from 'redux-saga/effects';
import mvp from './mvp/sagas';
import mvps from './mvps/sagas';
import filterMvp from './filterMvp/sagas';
import specificMvps from './specificMvps/sagas';
import rooms from './rooms/sagas';



export default function* rootSaga() {
  // return yield all([mvps, specificMvps, mvp, filterMvp, rooms]);
  return  yield all([mvps, specificMvps, mvp, filterMvp, rooms]);
}
