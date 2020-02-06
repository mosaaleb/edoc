/* eslint-disable import/prefer-default-export */

export const setNotificationMessage = (notification) => ({
  type: 'SET_NOTIFICATION_MESSAGE',
  notification
});

export const resetNotificationMessage = () => ({
  type: 'RESET_NOTIFICATION_MESSAGE'
});
