import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import ValidationError from './ValidationError';
import { createAppointment } from '../actions/asyncActions';
import '../stylesheets/datePicker.css';

const AppointmentDatePicker = ({
  token,
  doctor,
  validationErrors,
  createAppointment,
  setIsDatePickerShowing
}) => {
  const [selectedDateTime, setSelectedDateTime] = useState();

  const likeSvg = (
    <svg width="16" height="16" fill="none" className="inline-block">
      <path
        fill="#000"
        d="M11.188 1c-1.05 0-1.741.122-2.53.49a4.668 4.668 0 00-.666.379c-.2-.134-.41-.253-.63-.357C6.556 1.132 5.831 1 4.817 1 2.038 1 0 3.214 0 6.08c0 2.148 1.237 4.188 3.512 6.137 1.178 1.01 2.679 2.006 3.761 2.54l.727.358.727-.358c1.082-.534 2.583-1.53 3.761-2.54C14.764 10.268 16 8.227 16 6.08c0-2.838-2.056-5.07-4.812-5.08zM14 6.08c0 1.464-.939 3.013-2.813 4.618-.995.852-2.265 1.706-3.187 2.185-.922-.479-2.192-1.333-3.187-2.185C2.939 9.093 2 7.544 2 6.08 2 4.283 3.182 3 4.818 3c.74 0 1.18.08 1.69.321.295.139.554.32.777.547l.718.73.713-.736c.228-.236.49-.421.786-.56.494-.23.905-.302 1.682-.302C12.798 3.006 14 4.31 14 6.08z"
      />
    </svg>
  );

  const handleClick = () => {
    createAppointment(doctor.id, selectedDateTime, token);
  };

  return (
    <div className="fixed right-0 top-0 bg-gray-100 w-full h-screen z-50 overflow-y-hidden">
      <div className="flex flex-col items-center">
        <div className="p-8 w-full mx-auto bg-gradient text-gray-100">
          <h4 className="font-bold text-center text-2xl mb-3">
            Make a Booking
          </h4>
          <Datetime onChange={(date) => setSelectedDateTime(date)} />
        </div>
        <ValidationError
          inputField="Date"
          isValid={validationErrors.isValid}
          error={validationErrors.errors.date}
        />
        <div className="w-4/5 flex flex-col items-center">
          <button
            type="button"
            onClick={handleClick}
            className="font-bold text-gray-100 bg py-3 rounded-full w-5/6 bg-gradient focus:outline-none my-10"
          >
            Book Appointment
          </button>
          <div className="w-full text-center mb-10">
            <h3 className="font-bold text-gray-900">
              {`Dr. ${doctor.first_name} ${doctor.last_name}`}
            </h3>
            <h5 className="text-gray-700 text-sm font-bold">
              {doctor.speciality}
            </h5>
            <p className="text-gray-600 text-sm">MD- General Medicine</p>
            <div className="flex justify-between font-bold text-sm mt-3">
              <p>$200</p>
              <p>14 Years of exp.</p>
              <p>
                <button type="button" className="focus:outline-none">
                  {likeSvg}
                </button>
                <span> 126</span>
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsDatePickerShowing(false)}
          className="text-5xl m-5 w-20 h-20 focus:outline-none text-gray-100 bg-gray-200 rounded-full shadow-xl fixed bottom-0 right-0 bg-gradient"
        >
          ×
        </button>
      </div>
    </div>
  );
};

AppointmentDatePicker.propTypes = {
  token: PropTypes.string.isRequired,
  createAppointment: PropTypes.func.isRequired,
  setIsDatePickerShowing: PropTypes.func.isRequired,
  doctor: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    speciality: PropTypes.string
  }).isRequired,
  validationErrors: PropTypes.shape({
    isValid: PropTypes.bool.isRequired,
    errors: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
  }).isRequired
};

const mapStateToProps = (state) => ({
  id: state.auth.currentUser.role_id,
  token: state.token,
  validationErrors: state.validationErrors,
  notifications: state.notifications
});

export default connect(mapStateToProps, { createAppointment })(
  AppointmentDatePicker
);
