/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */

import Axios from 'axios';
import { setToken } from './tokenActions';
import { setCurrentUser } from './authActions';
import { setValidationErrors } from './validationsErrorsActions';

export const signUpWithUserData = (userData, history) => (
  (dispatch) => Axios.post('http://localhost:3000/patients', {
    patient: { account_attributes: { ...userData } }
  }).then((res) => {
    dispatch(setToken(res.data.auth_token));
    dispatch(setCurrentUser(res.data.current_user));
    history.push('/');
  }).catch((error) => {
    dispatch(setValidationErrors(error.response.data.message));
  })
);

export const signUpWithDoctorData = (doctorData, history) => (
  (dispatch) => Axios.post('http://localhost:3000/accounts', {
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
  (dispatch) => Axios.post('http://localhost:3000/authenticate', {
    authentication: { ...userData }
  }).then((res) => {
    dispatch(setToken(res.data.auth_token));
    dispatch(setCurrentUser(res.data.current_user));
    history.push('/');
  }).catch((error) => {
    dispatch(setValidationErrors(error.response.data.message));
  })
);

// TODO: no need to send patient_id as it can be accessed in the api

export const createAppointment = (patient_id, doctor_id, date, history) => (
  (dispatch) => Axios.post('http://localhost:3000/appointments', {
    appointment: { patient_id, doctor_id, date }
  }).then((res) => {

  }).catch((error) => {
    dispatch(setValidationErrors(error.response.data.message));
  })
);
