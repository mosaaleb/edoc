import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Doctor from './Doctor';

const Doctors = ({ token }) => {
  const history = useHistory();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const { speciality } = history.location.state;
    const headers = { Authorization: `Bearer ${token}` };
    const params = { speciality };
    Axios.get('http://localhost:3000/doctors', { headers, params }).then(
      (res) => {
        setDoctors(res.data);
      }
    );
  }, [token]);

  return (
    <div className="p-4 font-montserrat">
      <h2 className="text-teal-500 font-bold mb-2">
        Results Showing all Doctors
      </h2>
      <div>
        {doctors.map((doctor) => (
          <Doctor doctor={doctor} key={doctor.id} />
        ))}
      </div>
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
