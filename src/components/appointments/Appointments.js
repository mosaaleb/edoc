import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Appointment from './Appointment';

const Appointments = ({ token }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/appointments', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setAppointments(res.data);
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
  token: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  token: state.token
});

export default connect(mapStateToProps)(Appointments);
