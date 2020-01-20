// import configureStore from './configureStore';

// const configureAxios = () => {
//   const store = configureStore();
//   const state = store.getState();

//   console.log(state.token);

//   const axiosConfig = {
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8',
//       'Access-Control-Allow-Origin': '*',
//       Authorization: `Bearer ${state.token}`
//     }
//   };

//   return axiosConfig;
// };

// export default configureAxios;


const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer'
  }
};

export default axiosConfig;

// var postData = {
//   email: "test@test.com",
//   password: "password"
// };

// axios.post('http://<host>:<port>/<path>', postData, axiosConfig)
// .then((res) => {
//   console.log("RESPONSE RECEIVED: ", res);
// })
// .catch((err) => {
//   console.log("AXIOS ERROR: ", err);
// })
