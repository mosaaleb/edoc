/* eslint-disable import/prefer-default-export */

import Axios from 'axios';
import { setToken } from './tokenActions';
import { setCurrentUser } from './authActions';
import { setValidationErrors, resetValidationErrors } from './validationsErrorsActions';
import { setNotificationMessage } from './notificationActions';

const { token } = JSON.parse(localStorage.getItem('state'));

export const signUpWithUserData = (userData, history) => (
  (dispatch) => Axios.post('https://tranquil-river-82740.herokuapp.com/patients', {
    patient: { account_attributes: { ...userData } }
  }).then((res) => {
    dispatch(setToken(res.data.auth_token));
    dispatch(setCurrentUser(res.data.current_user));
    history.push('/specialities');
    dispatch(setNotificationMessage('Welcome Aboard'));
  }).catch((error) => {
    dispatch(setValidationErrors(error.response.data.message));
  })
);

export const signUpWithDoctorData = (doctorData, history) => (
  (dispatch) => Axios.post('https://tranquil-river-82740.herokuapp.com/accounts', {
    account: { ...doctorData, type: 'Doctor' }
  }).then((res) => {
    dispatch(setToken(res.data.auth_token));
    dispatch(setCurrentUser(res.data.current_user));
    history.push('/');
  }).catch((error) => {
    dispatch(setValidationErrors(error.response.data.message));
  })
);

export const signInWithEmailAndPassword = (userData, history) => (
  (dispatch) => Axios.post('https://tranquil-river-82740.herokuapp.com/authenticate', {
    authentication: { ...userData }
  }).then((res) => {
    dispatch(setToken(res.data.auth_token));
    dispatch(setCurrentUser(res.data.current_user));
    history.push('/specialities');
    dispatch(setNotificationMessage('Welcome Back!'));
  }).catch((error) => {
    dispatch(setNotificationMessage(error.response.data.message));
  })
);

export const createAppointment = (doctor_id, date) => (
  (dispatch) => Axios.post('https://tranquil-river-82740.herokuapp.com/appointments', {
    appointment: { doctor_id, date }
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => {
    dispatch(setNotificationMessage(res.data.message));
    dispatch(resetValidationErrors());
    return 'success';
  }).catch((error) => {
    dispatch(setValidationErrors(error.response.data.message));
    return 'failure';
  })
);
