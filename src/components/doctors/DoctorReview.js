import React from 'react';
import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import 'react-lazy-load-image-component/src/effects/blur.css';

const DoctorReview = ({ review }) => {
  const {
    createdAt,
    reviewerName,
    review: text,
    reviewerAvatarUrl
  } = review;
  return (
    <div className="p-4 my-10 shadow-md">
      <div>
        <div className="flex items-center pb-1">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <LazyLoadImage
              src={reviewerAvatarUrl}
              alt={`${reviewerName}'s avatar`}
              effect="blur"
              className="block object-cover w-full h-full"
            />
          </div>
          <div className="pl-2">
            <div className="text-lg">
              <span className="font-bold text-teal-500">
                {reviewerName}
              </span>
              {' '}
              Said:
            </div>
            <div className="text-xs font-bold text-gray-500">
              {moment(createdAt).fromNow()}
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 text-gray-700">
        {text}
      </div>
    </div>
  );
};

DoctorReview.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    review: PropTypes.string,
    createdAt: PropTypes.string,
    reviewerName: PropTypes.string,
    reviewerAvatarUrl: PropTypes.string
  }).isRequired
};

export default DoctorReview;
