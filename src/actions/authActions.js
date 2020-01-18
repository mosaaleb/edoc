/* eslint-disable import/prefer-default-export */
import Axios from 'axios';

export const signUpWithUserData = (userData) => (
  (dispatch) => Axios.post('http://localhost:3000/accounts', {
    account: { ...userData }
  }).then((res) => {
    dispatch({
      type: 'SET_TOKEN',
      token: res.data.auth_token
      // userData: decodeUserData(res.data.auth_token)
    });
    dispatch({
      type: 'SET_CURRENT_USER',
      data: { name: 'muhammad', id: '2' }
    });
  })
);
