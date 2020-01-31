import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Appointment = ({ appointment }) => {
  const { doctor, date } = appointment;
  const doctorName = `Dr. ${doctor.first_name} ${doctor.last_name}`;
  return (
    <div className="shadow-md mb-6 flex rounded text-gray-900">
      <div className="w-3/12 bg-gradient text-center py-5 text-gray-100 rounded-l flex flex-col justify-around">
        <h4 className="font-bold uppercase">{moment(date).format('MMM')}</h4>
        <h2 className="font-bold text-4xl">{moment(date).format('D')}</h2>
        <p className="font-bold text-sm">{moment(date).format('LT')}</p>
      </div>

      <div className="w-9/12 p-4 flex flex-col">
        <h5 className="text-gray-600">{doctor.speciality}</h5>
        <h3 className="font-bold text-lg">{doctorName}</h3>
        <div className="flex justify-between font-bold text-sm mt-3 mb-3">
          <p>$200</p>
          <p>14 Years of exp.</p>
        </div>
        <button
          type="button"
          className="text-gray-100 bg py-1 rounded-full w-3/12 bg-gradient focus:outline-none"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    doctor: PropTypes.object
  }).isRequired
};

export default Appointment;
