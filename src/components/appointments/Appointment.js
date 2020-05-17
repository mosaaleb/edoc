import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { cancelAppointment } from '../../actions/asyncActions';

const Appointment = ({ appointment, cancelAppointment, setIsRefreshNeeded }) => {
  const { doctor, date } = appointment;

  const handleClick = () => {
    cancelAppointment(appointment.id).then(() => {
      setIsRefreshNeeded(true);
    });
  };

  return (
    <div className="flex my-5 text-gray-900 shadow-md">
      <div className="flex flex-col justify-around w-3/12 py-5 text-center text-gray-100 bg-gradient">
        <h4 className="font-bold uppercase">{moment(date).format('MMM')}</h4>
        <h2 className="text-4xl font-bold">{moment(date).format('D')}</h2>
        <p className="text-sm font-bold">{moment(date).format('LT')}</p>
      </div>

      <div className="flex flex-col w-9/12 p-4">
        <h5 className="text-gray-600">{doctor.speciality}</h5>
        <Link to={`doctors/${doctor.id}`}>
          <h3 className="text-lg font-bold text-teal-500">
            {doctor.fullName}
          </h3>
        </Link>
        <div className="flex justify-between mt-3 mb-3 text-sm font-bold">
          <p>{`$${doctor.fees}`}</p>
          <p>{`${doctor.yearsOfExperience} Years of exp.`}</p>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="w-3/12 py-1 text-gray-100 rounded-full bg bg-gradient focus:outline-none"
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
  }).isRequired,
  cancelAppointment: PropTypes.func.isRequired,
  setIsRefreshNeeded: PropTypes.func.isRequired
};

export default connect(null, { cancelAppointment })(Appointment);
