import { combineReducers } from 'redux';
import mvpsReducer from './mvps/reducer';
import roomsReducer from './rooms/reducer';
import userReducer from './user/reducer';


export default combineReducers({
    mvps: mvpsReducer,
    rooms: roomsReducer,
    user: userReducer,
});