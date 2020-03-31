import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const DoctorReview = ({ review }) => {
  const {
    createdAt,
    reviewerName,
    review: text,
    reviewerAvatarUrl
  } = review;
  return (
    <div className="shadow-md p-4 my-10">
      <div>
        <div className="flex items-center pb-1">
          <div className="w-12 h-12  rounded-full overflow-hidden">
            <img
              src={reviewerAvatarUrl}
              alt={`${reviewerName}'s avatar`}
              className="h-full w-full object-cover block"
            />
          </div>
          <div className="pl-2">
            <div className="text-lg">
              <span className="text-teal-500 font-bold">{reviewerName}</span>
              {' '}
              Said:
            </div>
            <div className="text-xs font-bold text-gray-500">{moment(createdAt).fromNow()}</div>
          </div>
        </div>
      </div>
      <div className="text-gray-700 my-3">
        {text}
      </div>
    </div>
  );
};

DoctorReview.propTypes = {
  review: PropTypes.objectOf({
    id: PropTypes.number,
    review: PropTypes.string,
    createdAt: PropTypes.string,
    reviewerName: PropTypes.string,
    reviewerAvatarUrl: PropTypes.string
  }).isRequired
};

export default DoctorReview;
