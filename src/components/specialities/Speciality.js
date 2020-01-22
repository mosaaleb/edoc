import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Speciality = ({ speciality }) => {
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={() => history.push(`/specialities/${speciality.id}/doctors`)}
      className="text-center w-2/5 my-6 mx-3 p-4 bg-teal-100 shadow-md rounded focus:outline-none active:bg-teal-200"
    >
      <p className="text-teal-500 font-bold font-montserrat">{speciality.speciality}</p>
    </button>
  );
};

Speciality.propTypes = {
  speciality: PropTypes.shape({
    id: PropTypes.number,
    speciality: PropTypes.string
  }).isRequired
};

export default Speciality;
