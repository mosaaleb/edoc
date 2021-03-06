import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axiosInstance from '../../configureAxios';
import Speciality from './Speciality';
import { removeCurrentUser } from '../../actions/authActions';
import { setNotificationMessage } from '../../actions/notificationActions';
import { setIsLoading, resetIsLoading } from '../../actions/loadingActions';
import Loading from '../Loading';

const Specialities = ({
  loading,
  setIsLoading,
  resetIsLoading,
  removeCurrentUser,
  setNotificationMessage
}) => {
  const history = useHistory();
  const [specialities, setSpecialities] = useState([]);

  const renderSpecialities = specialities.map((speciality) => (
    <Speciality key={speciality.id} speciality={speciality} />
  ));

  useEffect(() => {
    setIsLoading();
    axiosInstance.get('/specialities')
      .then((res) => {
        setSpecialities(res.data);
      })
      .then(() => {
        resetIsLoading();
      });
  }, [history, setIsLoading, resetIsLoading, setNotificationMessage, removeCurrentUser]);

  return (
    <div className="p-4 font-montserrat">
      <div className="text-teal-500 font-bold">
        <svg
          viewBox="0 0 512 512"
          className="d-block mx-auto w-32 fill-current"
        >
          <path d="M290.146 492.76c-1.947-5.192-7.735-7.822-12.924-5.876-8.916 3.343-18.328 5.038-27.973 5.038-21.45.001-41.69-8.347-56.993-23.504-15.317-15.171-23.752-35.282-23.752-56.625V290.566h27.426c47.069 0 85.361-38.281 85.361-85.334v-61.587c0-10.27-6.204-19.115-15.059-22.996V71.261c0-14.405-4.28-28.052-12.12-39.527 1.078-2.668 1.679-5.579 1.679-8.629C255.79 10.365 245.422 0 232.678 0s-23.111 10.365-23.111 23.106 10.367 23.107 23.111 23.107c2.179 0 4.285-.309 6.284-.875 4.658 7.696 7.193 16.583 7.193 25.924v49.387c-8.855 3.881-15.059 12.726-15.059 22.996v61.587c0 19.376-15.776 35.138-35.165 35.138h-71.917c-19.39 0-35.165-15.763-35.165-35.138v-61.587c0-10.27-6.204-19.115-15.059-22.996V71.261c0-9.395 2.565-18.331 7.273-26.057 2.136.654 4.402 1.007 6.749 1.007 12.744 0 23.112-10.365 23.112-23.107C110.923 10.365 100.555 0 87.811 0 75.066 0 64.699 10.365 64.699 23.106c0 2.856.525 5.59 1.476 8.118C58.112 42.803 53.71 56.642 53.71 71.261v49.387c-8.855 3.881-15.059 12.726-15.059 22.996v61.587c0 47.054 38.294 85.334 85.361 85.334h24.411v121.227c0 26.743 10.548 51.92 29.701 70.891 19.088 18.907 44.346 29.319 71.123 29.318 12.062 0 23.845-2.125 35.023-6.316 5.192-1.947 7.823-7.734 5.876-12.925zM124.012 270.488c-35.997 0-65.283-29.274-65.283-65.256v-61.587c0-2.768 2.252-5.02 5.02-5.02s5.02 2.252 5.02 5.02v61.587c0 30.447 24.783 55.217 55.244 55.217h71.917c30.462 0 55.244-24.77 55.244-55.217v-61.587c0-2.768 2.252-5.02 5.02-5.02s5.02 2.252 5.02 5.02v61.587c0 35.983-29.286 65.256-65.283 65.256h-71.919zM434.667 356.38v-59.266c0-32.008-26.03-58.049-58.025-58.049-31.876 0-57.81 26.041-57.811 58.049v138.379c.001 13.27-5.276 25.576-14.858 34.652-4.026 3.813-4.197 10.167-.385 14.192 1.974 2.084 4.629 3.135 7.29 3.135 2.478 0 4.96-.912 6.902-2.751 13.428-12.72 21.13-30.664 21.129-49.23V297.115c.001-20.937 16.927-37.971 37.732-37.971 20.924 0 37.946 17.034 37.946 37.97v59.266c-22.065 4.643-38.683 24.263-38.683 47.696 0 26.877 21.857 48.742 48.723 48.742 26.865 0 48.72-21.865 48.72-48.742.002-23.433-16.616-43.053-38.68-47.696zm-10.038 76.36c-15.795 0-28.645-12.858-28.645-28.664 0-15.805 12.85-28.663 28.644-28.664 15.794 0 28.643 12.858 28.643 28.664 0 15.806-12.85 28.664-28.642 28.664z" />
        </svg>
      </div>
      <div className="flex flex-col items-center py-10">
        <h3 className="font-bold text-4xl">Search Doctors</h3>
        <p className="text-lg">
          Search doctors by your health concerns listed below.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {loading ? <Loading /> : renderSpecialities }
      </div>
    </div>
  );
};

Specialities.propTypes = {
  loading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  resetIsLoading: PropTypes.func.isRequired,
  removeCurrentUser: PropTypes.func.isRequired,
  setNotificationMessage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  removeCurrentUser: () => {
    dispatch(removeCurrentUser());
  },
  setNotificationMessage: (msg) => {
    dispatch(setNotificationMessage(msg));
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
  resetIsLoading: () => {
    dispatch(resetIsLoading());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Specialities);
