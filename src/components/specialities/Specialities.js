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
    })
      .then((res) => {
        setSpecialities(res.data);
      });
  }, [token]);

  return (
    <div>
      {specialities.map((speciality) => (
        <Speciality name={speciality.name} key={speciality.id} />
      ))}
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
