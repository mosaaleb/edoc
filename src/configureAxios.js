import Axios from 'axios';
import configureStore from './configureStore';

const store = configureStore();
const state = store.getState();

const instance = Axios.create({
  baseURL: 'https://tranquil-river-82740.herokuapp.com'
});

instance.defaults.headers.common.Authorization = `Bearer ${state.token}`;

export default instance;
// const axiosConfig = {
//   headers: {
//     'Content-Type': 'application/json;charset=UTF-8',
//     'Access-Control-Allow-Origin': '*',
//     Authorization: `Bearer ${state.token}`
//   }
// };


// const axiosConfig = {
//   headers: {
//     'Content-Type': 'application/json;charset=UTF-8',
//     'Access-Control-Allow-Origin': '*',
//     Authorization: 'Bearer'
//   }
// };

// export default axiosConfig;
