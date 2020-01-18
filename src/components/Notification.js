import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ messages }) => {
  const notificationsMessages = messages.map((mes) => <h1 key={mes}>{mes}</h1>);
  return (
    <div>
      {notificationsMessages}
    </div>
  );
};

Notification.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Notification;
