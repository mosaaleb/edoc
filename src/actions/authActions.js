/* eslint-disable import/prefer-default-export */
import Axios from 'axios';


export const signUpWithUserData = (userData) => (
  (dispatch) => Axios.post('http://localhost:3000/accounts', {
    account: { ...userData }
  }).then((res) => {
    dispatch({
      type: 'AUTHENTICATE_USER',
      token: res.data.auth_token
      // userData: decodeUserData(res.data.auth_token)
    });
  })
);
