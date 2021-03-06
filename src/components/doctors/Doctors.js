import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axiosInstance from '../../configureAxios';
import Doctor from './Doctor';
import Filter from './Filter';
import { removeCurrentUser } from '../../actions/authActions';
import { setNotificationMessage } from '../../actions/notificationActions';
import { resetIsLoading, setIsLoading } from '../../actions/loadingActions';
import Loading from '../Loading';

const Doctors = ({
  loading,
  setIsLoading,
  resetIsLoading,
  removeCurrentUser,
  setNotificationMessage
}) => {
  const history = useHistory();
  const [doctors, setDoctors] = useState([]);
  const [isFilterHidden, setIsFilterHidden] = useState(true);
  const speciality = history.location.state
    ? history.location.state.speciality
    : null;
  const [params, setParams] = useState({
    name: null,
    speciality
  });

  const renderDoctors = doctors.map((doctor) => (
    <Doctor doctor={doctor} key={doctor.id} />
  ));

  useEffect(() => {
    setIsLoading();
    axiosInstance.get('/doctors', { params })
      .then((res) => {
        setDoctors(res.data);
      })
      .catch(() => {
        removeCurrentUser();
        history.push('/signin');
        setNotificationMessage('Session expired! Please log in to continue');
      })
      .then(() => {
        resetIsLoading();
      });
  }, [
    params,
    history,
    setIsLoading,
    resetIsLoading,
    removeCurrentUser,
    setNotificationMessage
  ]);

  return (
    <div className="p-4 font-montserrat">
      <h2 className="mb-2 font-bold text-teal-500">
        Results Showing all Doctors
      </h2>
      <div>{loading ? <Loading /> : renderDoctors}</div>
      <button
        type="button"
        onClick={() => setIsFilterHidden(!isFilterHidden)}
        className="fixed top-0 right-0 z-30 p-3 mt-20 mr-5 text-gray-100 rounded-full shadow-lg bg-gradient focus:outline-none"
      >
        {isFilterHidden ? (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M13 11C11.1362 11 9.57006 9.72523 9.12602 8H2V6H9.12602C9.57006 4.27477 11.1362 3 13 3C15.2091 3 17 4.79086 17 7C17 9.20914 15.2091 11 13 11ZM19 6H22V8H19V6ZM8 21C6.13616 21 4.57006 19.7252 4.12602 18H2V16H4.12602C4.57006 14.2748 6.13616 13 8 13C10.2091 13 12 14.7909 12 17C12 19.2091 10.2091 21 8 21ZM14 18H22V16H14V18ZM10 17C10 18.1046 9.10457 19 8 19C6.89543 19 6 18.1046 6 17C6 15.8954 6.89543 15 8 15C9.10457 15 10 15.8954 10 17ZM15 7C15 8.10457 14.1046 9 13 9C11.8954 9 11 8.10457 11 7C11 5.89543 11.8954 5 13 5C14.1046 5 15 5.89543 15 7Z"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        )}
      </button>
      {isFilterHidden ? null : (
        <Filter
          params={params}
          setParams={setParams}
          setIsFilterHidden={setIsFilterHidden}
        />
      )}
    </div>
  );
};

Doctors.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
