const initState = {
  isAuthenticated: false,
  currentUser: {}
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        isAuthenticated: true,
        currentUser: action.data
      };
    default:
      return state;
  }
};

export default auth;
