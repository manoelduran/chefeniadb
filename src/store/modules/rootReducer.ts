import { combineReducers } from 'redux';
import mvpsReducer from './mvps/reducer';

export default combineReducers({
    mvps:  mvpsReducer,
});