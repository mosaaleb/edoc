import { combineReducers } from 'redux';
import auth from './authReducer';
import token from './tokenReducer';
import notification from './notificationReducer';

const appReducer = combineReducers({
  auth,
  token,
  notification
});

export default appReducer;
