import React from 'react';
import PropTypes from 'prop-types';

const Speciality = ({ name }) => <div>{name}</div>;

Speciality.propTypes = {
  name: PropTypes.string.isRequired
};

export default Speciality;
