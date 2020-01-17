import { combineReducers } from 'redux';
import auth from './authReducer';
import notification from './notificationReducer';

const appReducer = combineReducers({ auth, notification });

export default appReducer;
