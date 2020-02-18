const loading = (state = false, action) => {
  switch (action.type) {
    case 'SET_IS_LOADING':
      return true;
    case 'RESET_IS_LOADING':
      return false;
    default:
      return state;
  }
};

export default loading;
