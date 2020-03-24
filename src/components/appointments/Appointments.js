import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axiosInstance from '../../configureAxios';
import Appointment from './Appointment';
import { removeCurrentUser } from '../../actions/authActions';
import { setNotificationMessage } from '../../actions/notificationActions';
import { resetIsLoading, setIsLoading } from '../../actions/loadingActions';
import Loading from '../Loading';

const Appointments = ({
  loading,
  setIsLoading,
  resetIsLoading,
  removeCurrentUser,
  setNotificationMessage
}) => {
  const history = useHistory();
  const [appointments, setAppointments] = useState([]);
  const [isRefreshNeeded, setIsRefreshNeeded] = useState([]);

  const renderAppointments = appointments.map((appointment) => (
    <Appointment
      key={appointment.id}
      appointment={appointment}
      setIsRefreshNeeded={setIsRefreshNeeded}
    />
  ));

  useEffect(() => {
    setIsRefreshNeeded(false);
    setIsLoading();
    axiosInstance.get('/appointments')
      .then((res) => {
        setAppointments(res.data);
      })
      .catch(() => {
        removeCurrentUser();
        history.push('/signin');
        setNotificationMessage('Session expired! Please log in to continue');
      })
      .then(() => {
        resetIsLoading();
      });
  }, [
    history,
    setIsLoading,
    resetIsLoading,
    isRefreshNeeded,
    removeCurrentUser,
    setNotificationMessage
  ]);

  return (
    <div className="p-4 font-montserrat">
      <h2 className="text-teal-500 font-bold mb-2">
        List of your scheduled appointments:
      </h2>
      {loading ? <Loading /> : renderAppointments}
    </div>
  );
};

Appointments.propTypes = {
  loading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  resetIsLoading: PropTypes.func.isRequired,
  removeCurrentUser: PropTypes.func.isRequired,
  setNotificationMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  removeCurrentUser: () => {
    dispatch(removeCurrentUser());
  },
  setNotificationMessage: (msg) => {
    dispatch(setNotificationMessage(msg));
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
  resetIsLoading: () => {
    dispatch(resetIsLoading());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
