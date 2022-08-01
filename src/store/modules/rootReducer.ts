import { combineReducers } from 'redux';
import mvpsReducer from './mvps/reducer';
import specificMvpsReducer from './specificMvps/reducer';

export default combineReducers({
    mvps:  mvpsReducer,
    specificMvps: specificMvpsReducer,
});