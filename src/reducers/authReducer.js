const initState = {
  isAuthenticated: false,
  currentUser: {}
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        isAuthenticated: true,
        currentUser: { id: action.data.id, ...action.data.account }
      };
    case 'REMOVE_CURRENT_USER':
      return {
        isAuthenticated: false,
        currentUser: {}
      };
    default:
      return state;
  }
};

export default auth;
