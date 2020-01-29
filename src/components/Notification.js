import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message, isError }) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div
      className={`fixed flex justify-between top-0 left-0 w-full px-3 py-5
      ${isError ? 'bg-red-400' : 'bg-gradient'}
      ${isHidden ? 'hidden' : 'block'} z-50  text-gray-100`}
    >
      <p>{message}</p>
      <button
        type="button"
        onClick={() => setIsHidden(true)}
        className="focus:outline-none"
      >
        ×
      </button>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired
};

export default Notification;
