import React from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../../configureAxios';

const DoctorLikeButton = ({ isLiked, likesCount }) => {
  return (
    <p>
      <button type="button" className="focus:outline-none">
        <svg
          width="17"
          height="17"
          viewBox="0 0 20 20"
          className={`fill-current inline-block ${
            isLiked ? 'text-red-700' : 'text-white'
          }`}
        >
          <path
            stroke="black"
            strokeWidth="2"
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
  isLiked: PropTypes.bool.isRequired,
  likesCount: PropTypes.number.isRequired
};

export default DoctorLikeButton;
