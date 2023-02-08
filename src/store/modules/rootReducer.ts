import { combineReducers } from 'redux';
import mvpsReducer from './mvps/reducer';
import roomsReducer from './rooms/reducer';


export default combineReducers({
    mvps: mvpsReducer,
    rooms: roomsReducer,
});