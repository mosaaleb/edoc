import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AppointmentDatePicker from '../AppointmentDatePicker';
import { resetValidationErrors } from '../../actions/validationsErrorsActions';
import DoctorLikeButton from './DoctorLikeButton';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Doctor = ({ doctor, resetValidationErrors }) => {
  const {
    id,
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

  useEffect(() => {
    resetValidationErrors();
  }, [isDatePickerShowing, resetValidationErrors]);

  return (
    <div className="p-4 my-5 shadow-md">
      {isDatePickerShowing ? (
        <AppointmentDatePicker
          doctor={doctor}
          setIsDatePickerShowing={setIsDatePickerShowing}
        />
      ) : null}
      <div className="flex flex-grow mb-3">
        <div className="w-20 h-20 mr-3 overflow-hidden rounded-full shadow">
          <LazyLoadImage
            alt={`${fullName}'s avatar`}
            src={doctor.avatarUrl}
            effect="blur"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full">
          <h3 className="font-bold text-gray-900">{fullName}</h3>
          <h5 className="text-sm font-bold text-gray-700">
            {speciality}
          </h5>
          <p className="text-sm text-gray-600">MD- General Medicine</p>
          <div className="flex justify-between mt-3 text-sm font-bold">
            <p>{`$${fees}`}</p>
            <p>{`${yearsOfExperience} Years of exp.`}</p>
            <DoctorLikeButton
              id={id}
              isLiked={liked}
              likesCount={likesCount}
              strokeColor="black"
            />
          </div>
        </div>
      </div>
      <h2 className="mb-4 text-sm font-bold text-center text-teal-500 uppercase">
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
          className="py-2 font-bold text-teal-500 bg-white border border-teal-500 rounded-full w-6/13 focus:outline-none"
        >
          Call
        </button>
        <button
          type="button"
          onClick={() => setIsDatePickerShowing(true)}
          className="py-2 font-bold text-gray-100 rounded-full bg w-6/13 bg-gradient focus:outline-none"
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
