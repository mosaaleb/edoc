import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetNotificationMessage } from '../actions/notificationActions';


const Notification = ({ notification, resetNotificationMessage }) => {
  const [isHidden, setIsHidden] = useState(false);

  const hideNotification = () => {
    setIsHidden(true);
    resetNotificationMessage();
  };

  return (
    <div
      className={`fixed flex justify-between top-0 left-0 w-full px-3 py-5 bg-gradient
      ${isHidden ? 'hidden' : 'block'} z-50 text-gray-100`}
    >
      <p>{notification}</p>
      <button
        type="button"
        onClick={hideNotification}
        className="focus:outline-none"
      >
        ×
      </button>
    </div>
  );
};

Notification.defaultProps = {
  notification: null
};

Notification.propTypes = {
  notification: PropTypes.string,
  resetNotificationMessage: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  resetNotificationMessage: () => {
    dispatch(resetNotificationMessage());
  }
});

const mapStateToProps = (state) => ({
  notification: state.notification
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
