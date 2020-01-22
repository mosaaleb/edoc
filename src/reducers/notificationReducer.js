const notification = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION_MESSAGE':
      return action.notification;
    default:
      return state;
  }
};

export default notification;
