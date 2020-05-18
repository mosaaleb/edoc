import Axios from 'axios';
import configureStore from './configureStore';

const store = configureStore();
const state = store.getState();

const axiosInstance = Axios.create({
  baseURL: 'https://tranquil-river-82740.herokuapp.com/'
});

axiosInstance.defaults.headers.common.Authorization = `Bearer ${state.token}`;

export default axiosInstance;
