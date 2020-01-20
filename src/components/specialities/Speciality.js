import React from 'react';
import PropTypes from 'prop-types';

const Speciality = ({ name }) => (
  <div className="text-center w-2/5 my-6 mx-3 p-4 bg-teal-100 shadow-md rounded">
    <p className="text-teal-600 font-bold font-montserrat">{name}</p>
  </div>
);
Speciality.propTypes = {
  name: PropTypes.string.isRequired
};

export default Speciality;
