const initState = {
  isAuthenticated: false,
  userData: {}
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return {
        isAuthenticated: true,
        userData: {
          token: action.token
        }
      };
    default:
      return state;
  }
};

export default auth;
