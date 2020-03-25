import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axiosInstance from '../../configureAxios';
import { setIsLoading, resetIsLoading } from '../../actions/loadingActions';
import { removeCurrentUser } from '../../actions/authActions';
import { setNotificationMessage } from '../../actions/notificationActions';

const DoctorProfile = () => {
  const params = useParams();
  const history = useHistory();
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    setIsLoading();
    axiosInstance.get(`doctors/${params.id}`)
      .then((res) => {
        setDoctor(res.data);
      }).catch(() => {
        removeCurrentUser();
        history.push('/signin');
        setNotificationMessage('Session expired! Please log in to continue');
      }).then(() => {
        resetIsLoading();
      });
  }, [
    params,
    history
  ]);

  return (
    <div className="p-4 font-montserrat">
      <pre>
        {JSON.stringify(doctor, null, 2)}
      </pre>
    </div>
  );
};

export default DoctorProfile;
