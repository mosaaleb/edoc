import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Appointment from './Appointment';
import { removeCurrentUser } from '../../actions/authActions';
import { setNotificationMessage } from '../../actions/notificationActions';
import { resetIsLoading, setIsLoading } from '../../actions/loadingActions';
import Loading from '../Loading';

const Appointments = ({
  token,
  loading,
  setIsLoading,
  resetIsLoading,
  removeCurrentUser,
  setNotificationMessage
}) => {
  const history = useHistory();
  const [appointments, setAppointments] = useState([]);

  const renderAppointments = appointments.map((appointment) => (
    <Appointment key={appointment.id} appointment={appointment} />
  ));

  useEffect(() => {
    setIsLoading();
    Axios.get('https://tranquil-river-82740.herokuapp.com/appointments', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setAppointments(res.data);
      })
      .catch(() => {
        removeCurrentUser();
        history.push('/signin');
        setNotificationMessage('Session expired! Please log in to continue');
      }).then(() => {
        resetIsLoading();
      });
  }, [token, history, setIsLoading, resetIsLoading, setNotificationMessage, removeCurrentUser]);

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
  token: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  resetIsLoading: PropTypes.func.isRequired,
  removeCurrentUser: PropTypes.func.isRequired,
  setNotificationMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  token: state.token,
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
