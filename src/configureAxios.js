import Axios from 'axios';
import configureStore from './configureStore';

const store = configureStore();
const state = store.getState();

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:3000/'
});

axiosInstance.defaults.headers.common.Authorization = `Bearer ${state.token}`;

export default axiosInstance;
