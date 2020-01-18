import { combineReducers } from 'redux';
import auth from './authReducer';
import token from './tokenReducer';
import notification from './notificationReducer';
import validationErrors from './validationErrorsReducer';

const appReducer = combineReducers({
  auth,
  token,
  notification,
  validationErrors
});

export default appReducer;
