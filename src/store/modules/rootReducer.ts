import { combineReducers } from 'redux';
import filterMvpReducer from './filterMvp/reducer';
import mvpReducer from './mvp/reducer';
import mvpsReducer from './mvps/reducer';
import specificMvpsReducer from './specificMvps/reducer';

export default combineReducers({
    mvps:  mvpsReducer,
    specificMvps: specificMvpsReducer,
    mvp: mvpReducer,
    filterMvp: filterMvpReducer,
});