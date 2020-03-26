import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppointmentDatePicker from '../AppointmentDatePicker';
import { resetValidationErrors } from '../../actions/validationsErrorsActions';
import DoctorLikeButton from './DoctorLikeButton';

const Doctor = ({ doctor, resetValidationErrors }) => {
  const {
    fees,
    liked,
    lastName,
    firstName,
    speciality,
    likesCount,
    yearsOfExperience
  } = doctor;

  const [isDatePickerShowing, setIsDatePickerShowing] = useState(false);

  const fullName = `Dr. ${firstName} ${lastName}`;

<<<<<<< HEAD
=======
  const likeSvg = (
    <svg
      width="17"
      height="17"
      viewBox="0 0 20 20"
      className={`fill-current inline-block ${liked ? 'text-red-700' : 'text-white'}`}
    >
      <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" stroke="black" strokeWidth="2" />
    </svg>
  );

>>>>>>> e0cfc1f84be6500108bc97ba1161e4fd8960f40d
  useEffect(() => {
    resetValidationErrors();
  }, [isDatePickerShowing, resetValidationErrors]);

  return (
    <div className="shadow-md p-4 my-5">
      {isDatePickerShowing ? (
        <AppointmentDatePicker
          doctor={doctor}
          setIsDatePickerShowing={setIsDatePickerShowing}
        />
      ) : null}
      <div className="flex mb-3 flex-grow">
        <div className="w-20 h-16 mr-3 rounded-full overflow-hidden shadow">
          <img
            src={doctor.avatarUrl}
            alt={`${fullName}'s avatar`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full">
          <h3 className="font-bold text-gray-900">{fullName}</h3>
          <h5 className="text-gray-700 text-sm font-bold">
            {speciality}
          </h5>
          <p className="text-gray-600 text-sm">MD- General Medicine</p>
          <div className="flex justify-between font-bold text-sm mt-3">
            <p>{`$${fees}`}</p>
            <p>{`${yearsOfExperience} Years of exp.`}</p>
<<<<<<< HEAD
            <DoctorLikeButton isLiked={liked} likesCount={likesCount} />
=======
            <p>
              <button type="button" className="focus:outline-none">
                {likeSvg}
              </button>
              <span>
                {' '}
                {likesCount}
              </span>
            </p>
>>>>>>> e0cfc1f84be6500108bc97ba1161e4fd8960f40d
          </div>
        </div>
      </div>
      <h2 className="text-center uppercase text-sm font-bold mb-4 text-teal-500">
        <Link
          className="text-center"
          to={`doctors/${doctor.id}`}
        >
          View Profile
        </Link>
      </h2>
      <div className="flex justify-between">
        <button
          type="button"
          className="font-bold text-teal-500 bg-white border border-teal-500 py-2 rounded-full w-6/13 focus:outline-none"
        >
          Call
        </button>
        <button
          type="button"
          onClick={() => setIsDatePickerShowing(true)}
          className="font-bold text-gray-100 bg py-2 rounded-full w-6/13 bg-gradient focus:outline-none"
        >
          Book
        </button>
      </div>
    </div>
  );
};

Doctor.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number,
    liked: PropTypes.bool,
    fees: PropTypes.number,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    avatarUrl: PropTypes.string,
    speciality: PropTypes.string,
    likesCount: PropTypes.number,
    yearsOfExperience: PropTypes.number
  }).isRequired,
  resetValidationErrors: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  resetValidationErrors: () => {
    dispatch(resetValidationErrors());
  }
});

export default connect(null, mapDispatchToProps)(Doctor);
