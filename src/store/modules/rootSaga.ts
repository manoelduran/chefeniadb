import { all } from 'redux-saga/effects';
import mvp from './mvp/sagas';
import mvps from './mvps/sagas';
import specificMvps from './specificMvps/sagas';



export default function* rootSaga() {
  return yield all([mvps, specificMvps, mvp]);
}
