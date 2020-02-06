import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Appointment from './Appointment';
import { removeCurrentUser } from '../../actions/authActions';
import { setNotificationMessage } from '../../actions/notificationActions';

const Appointments = ({ token, setNotificationMessage, removeCurrentUser }) => {
  const history = useHistory();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    Axios.get('https://tranquil-river-82740.herokuapp.com/appointments', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setAppointments(res.data);
    }).catch(() => {
      removeCurrentUser();
      history.push('/signin');
      setNotificationMessage('Session expired! Please log in to continue');
    });
  }, [token]);

  return (
    <div className="p-4 font-montserrat">
      <h2 className="text-teal-500 font-bold mb-2">List of your scheduled appointments:</h2>
      {appointments.map((appointment) => (
        <Appointment key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};

Appointments.propTypes = {
  token: PropTypes.string.isRequired,
  removeCurrentUser: PropTypes.func.isRequired,
  setNotificationMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  token: state.token
});

const mapDispatchToProps = (dispatch) => ({
  removeCurrentUser: () => {
    dispatch(removeCurrentUser());
  },
  setNotificationMessage: (msg) => {
    dispatch(setNotificationMessage(msg));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
