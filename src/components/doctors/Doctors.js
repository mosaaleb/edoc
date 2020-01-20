import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Doctor from './Doctor';

const Doctors = ({ token }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/doctors', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setDoctors(res.data);
    });
  }, [token]);

  return (
    <div>
      {doctors.map((doctor) => (
        <Doctor id={doctor.id} key={doctor.id} />
      ))}
    </div>
  );
};


Doctors.propTypes = {
  token: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  token: state.token
});

export default connect(mapStateToProps)(Doctors);
