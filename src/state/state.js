import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import phoneReducer from './phone/reducer.js';

export default combineReducers({
    routing: routerReducer,
    phone: phoneReducer,
});