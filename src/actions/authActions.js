export const setCurrentUser = (userData) => ({
  type: 'SET_CURRENT_USER',
  data: userData
});

export const removeCurrentUser = () => ({
  type: 'REMOVE_CURRENT_USER'
});
