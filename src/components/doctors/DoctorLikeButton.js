import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../../configureAxios';

const DoctorLikeButton = ({
  id,
  isLiked,
  likesCount,
  strokeColor
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [count, setCount] = useState(Number.parseInt(likesCount, 10));
  const handleClick = () => {
    if (liked === false) {
      axiosInstance.post(`/doctors/${id}/like`)
        .then(() => {
          setLiked(true);
          setCount(count + 1);
        });
    } else {
      axiosInstance.delete(`/doctors/${id}/dislike`)
        .then(() => {
          setLiked(false);
          setCount(count - 1);
        });
    }
  };

  return (
    <p>
      <button
        type="button"
        onClick={handleClick}
        className="focus:outline-none"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 20 20"
          className={`fill-current inline-block ${
            liked ? 'text-red-700' : 'text-transparent'
          }`}
        >
          <path
            stroke={strokeColor}
            strokeWidth="1"
            d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
          />
        </svg>
      </button>
      <span>
        {' '}
        {count.toString(10)}
      </span>
    </p>
  );
};

DoctorLikeButton.propTypes = {
  id: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likesCount: PropTypes.number.isRequired,
  strokeColor: PropTypes.string.isRequired
};

export default DoctorLikeButton;
