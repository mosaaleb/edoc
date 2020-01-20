import React from 'react';
import PropTypes from 'prop-types';

const Speciality = ({ name }) => (
  <button
    type="button"
    // onClick={getDoctorsBySpeciality}
    className="text-center w-2/5 my-6 mx-3 p-4 bg-teal-100 shadow-md rounded focus:outline-none active:bg-teal-200"
  >
    <p className="text-teal-500 font-bold font-montserrat">{name}</p>
  </button>
);

Speciality.propTypes = {
  name: PropTypes.string.isRequired
};

export default Speciality;
