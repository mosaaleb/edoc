import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  const [isShown, setIsShown] = useState(true);
  return (
    <div className={`fixed flex justify-between top-0 left-0 w-full px-3 py-5 bg-gradient text-gray-100 ${isShown ? 'block' : 'hidden'}`}>
      <p>{message}</p>
      <button type="button" onClick={() => setIsShown(false)} className="focus:outline-none">×</button>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

export default Notification;
