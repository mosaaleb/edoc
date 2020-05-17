import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axiosInstance from '../../configureAxios';
import { setIsLoading, resetIsLoading } from '../../actions/loadingActions';
import { removeCurrentUser } from '../../actions/authActions';
import { setNotificationMessage } from '../../actions/notificationActions';
import DoctorReviews from './DoctorReviews';
import DoctorProfileHeader from './DoctorProfileHeader';
import Loading from '../Loading';

const DoctorProfile = ({
  loading,
  setIsLoading,
  resetIsLoading,
  removeCurrentUser
}) => {
  const params = useParams();
  const history = useHistory();
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    setIsLoading();
    axiosInstance.get(`doctors/${params.id}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch(() => {
        removeCurrentUser();
        history.push('/signin');
        setNotificationMessage('Session expired! Please log in to continue');
      })
      .then(() => {
        resetIsLoading();
      });
  }, [params, history, setIsLoading, resetIsLoading, removeCurrentUser]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full -mt-10">
      <DoctorProfileHeader doctor={doctor} />
      <div className="px-4 py-10 font-montserrat">
        <DoctorReviews reviews={doctor.reviews} />
      </div>
    </div>
  );
};

DoctorProfile.propTypes = {
  loading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  resetIsLoading: PropTypes.func.isRequired,
  removeCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  removeCurrentUser: () => {
    dispatch(removeCurrentUser());
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
  resetIsLoading: () => {
    dispatch(resetIsLoading());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorProfile);
