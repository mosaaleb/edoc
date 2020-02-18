const notification = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION_MESSAGE':
      return action.notification;
    case 'RESET_NOTIFICATION_MESSAGE':
      return null;
    default:
      return state;
  }
};

export default notification;
