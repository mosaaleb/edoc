const notification = (state = [], action) => {
  switch (action.type) {
    case 'SET_NOTIFICATIONS':
      return [...action.notifications];
    default:
      return state;
  }
};

export default notification;
