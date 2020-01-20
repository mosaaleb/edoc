import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Speciality from './Speciality';

const Specialities = ({ token }) => {
  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/specialities', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      setSpecialities(res.data);
    });
  }, [token]);

  return (
    <div className="p-2 font-montserrat">
      <div className="flex flex-col items-center py-10">
        <h3 className="font-bold text-4xl">Search Doctors</h3>
        <p className="text-lg">Search doctors by health concerns listed below.</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {specialities.map((speciality) => (
          <Speciality name={speciality.name} key={speciality.id} />
        ))}
      </div>
    </div>
  );
};

Specialities.propTypes = {
  token: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  token: state.token
});

export default connect(mapStateToProps)(Specialities);
