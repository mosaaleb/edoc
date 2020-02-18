/* eslint-disable import/prefer-default-export */

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token
});

export const removeToken = () => ({
  type: 'REMOVE_TOKEN'
});
