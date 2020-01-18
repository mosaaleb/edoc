/* eslint-disable import/prefer-default-export */

import Axios from 'axios';
import { setToken } from './tokenActions';
import { setCurrentUser } from './authActions';
import { setValidationErrors } from './validationsErrorsActions';

export const signUpWithUserData = (userData) => (
  (dispatch) => Axios.post('http://localhost:3000/accounts', {
    account: { ...userData }
  }).then((res) => {
    dispatch(setToken(res.data.auth_token));
    dispatch(setCurrentUser({ name: 'muhammad', id: '2' }));
  }).catch((error) => {
    dispatch(setValidationErrors(error.response.data.message));
  })
);
