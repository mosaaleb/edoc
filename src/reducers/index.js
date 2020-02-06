import { combineReducers } from 'redux';
import auth from './authReducer';
import token from './tokenReducer';
import loading from './loadingReducer';
import notification from './notificationReducer';
import validationErrors from './validationErrorsReducer';

const appReducer = combineReducers({
  auth,
  token,
  loading,
  notification,
  validationErrors
});

export default appReducer;
