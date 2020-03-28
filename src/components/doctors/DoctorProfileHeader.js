import React from 'react';
import PropTypes from 'prop-types';

const DoctorProfileHeader = ({ doctor }) => {
  return (
    <div className="bg-gradient">
      {JSON.stringify(doctor, null, 2)}
    </div>
  );
};

DoctorProfileHeader.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number,
    liked: PropTypes.bool,
    fees: PropTypes.number,
    fullName: PropTypes.string,
    avatarUrl: PropTypes.string,
    speciality: PropTypes.string,
    likesCount: PropTypes.number,
    yearsOfExperience: PropTypes.number
  }).isRequired
};

export default DoctorProfileHeader;
