import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppointmentDatePicker from '../AppointmentDatePicker';
import avatar from '../../assets/avatar.jpg';

const Doctor = ({ doctor }) => {
  const [isDatePickerShowing, setIsDatePickerShowing] = useState(false);

  const fullName = `Dr. ${doctor.first_name} ${doctor.last_name}`;

  const likeSvg = (
    <svg width="16" height="16" fill="none" className="inline-block">
      <path
        fill="#000"
        d="M11.188 1c-1.05 0-1.741.122-2.53.49a4.668 4.668 0 00-.666.379c-.2-.134-.41-.253-.63-.357C6.556 1.132 5.831 1 4.817 1 2.038 1 0 3.214 0 6.08c0 2.148 1.237 4.188 3.512 6.137 1.178 1.01 2.679 2.006 3.761 2.54l.727.358.727-.358c1.082-.534 2.583-1.53 3.761-2.54C14.764 10.268 16 8.227 16 6.08c0-2.838-2.056-5.07-4.812-5.08zM14 6.08c0 1.464-.939 3.013-2.813 4.618-.995.852-2.265 1.706-3.187 2.185-.922-.479-2.192-1.333-3.187-2.185C2.939 9.093 2 7.544 2 6.08 2 4.283 3.182 3 4.818 3c.74 0 1.18.08 1.69.321.295.139.554.32.777.547l.718.73.713-.736c.228-.236.49-.421.786-.56.494-.23.905-.302 1.682-.302C12.798 3.006 14 4.31 14 6.08z"
      />
    </svg>
  );

  return (
    <div className="shadow-md p-4 mb-6">
      {isDatePickerShowing ? (
        <AppointmentDatePicker
          doctor={doctor}
          setIsDatePickerShowing={setIsDatePickerShowing}
        />
      ) : null}
      <div className="flex mb-3 flex-grow">
        <div className="w-16 h-16 mr-3 rounded-full overflow-hidden">
          <img
            src={avatar}
            alt="avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full">
          <h3 className="font-bold text-gray-900">{fullName}</h3>
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
      <h2 className="text-center uppercase text-sm font-bold mb-4 text-teal-500">
        <Link to="/" className="text-center">
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
    role_id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    speciality: PropTypes.string
  }).isRequired
};

export default Doctor;