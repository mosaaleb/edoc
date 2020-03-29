import React from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../../configureAxios';

const DoctorLikeButton = ({
  id,
  isLiked,
  likesCount,
  strokeColor
}) => {
  const handleClick = () => {
    if (isLiked === false) {
      axiosInstance.post(`/doctors/${id}/like`)
        .then(() => {
          alert('liked!');
        });
    } else {
      axiosInstance.delete(`/doctors/${id}/dislike`)
        .then(() => {
          alert('disliked!');
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
            isLiked ? 'text-red-700' : 'text-transparent'
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
        {likesCount}
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
