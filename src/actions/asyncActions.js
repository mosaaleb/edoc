import axiosInstance from '../configureAxios';
import { setToken } from './tokenActions';
import { setCurrentUser } from './authActions';
import { setValidationErrors, resetValidationErrors } from './validationsErrorsActions';
import { setNotificationMessage } from './notificationActions';

export const signUpWithUserData = (userData, history) => (
  (dispatch) => axiosInstance.post('/patients', {
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
  (dispatch) => axiosInstance.post('/accounts', {
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
  (dispatch) => axiosInstance.post('/authenticate', {
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
  (dispatch) => axiosInstance.post('/appointments', {
    appointment: { doctor_id, date }
  }).then((res) => {
    dispatch(setNotificationMessage(res.data.message));
    dispatch(resetValidationErrors());
    return 'success';
  }).catch((error) => {
    dispatch(setValidationErrors(error.response.data.message));
    return 'failure';
  })
);

export const cancelAppointment = (id) => (
  (dispatch) => axiosInstance.delete(`/appointments/${id}`)
    .then((res) => {
      dispatch(setNotificationMessage(res.data.message));
    })
);
