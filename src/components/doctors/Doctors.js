import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Doctor from './Doctor';
import Notification from '../Notification';

const Doctors = ({ token, notification }) => {
  const [doctors, setDoctors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const params = { speciality_id: id };
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    Axios.get('https://tranquil-river-82740.herokuapp.com/doctors', { params }, { headers })
      .then(
        (res) => {
          setDoctors(res.data);
        }
      );
  }, [token, id]);

  return (
    <>
      {notification ? <Notification message={notification} /> : null}
      <div className="p-4 font-montserrat">
        <h2 className="text-teal-500 font-bold mb-2">
          Results Showing all Doctors
        </h2>
        <div className="">
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} key={doctor.role_id} />
          ))}
        </div>
      </div>
    </>
  );
};

Doctors.propTypes = {
  token: PropTypes.string.isRequired,
  notification: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  token: state.token,
  notification: state.notification
});

export default connect(mapStateToProps)(Doctors);
