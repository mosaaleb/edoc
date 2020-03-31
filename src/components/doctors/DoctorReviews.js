import React from 'react';
import PropTypes from 'prop-types';
import DoctorReview from './DoctorReview';

const DoctorReviews = ({ reviews }) => (
  <div>
    {reviews.map((review) => (
      <DoctorReview key={review.id} review={review} />
    ))}
  </div>
);

DoctorReviews.defaultProps = {
  reviews: []
};

DoctorReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object)
};
export default DoctorReviews;
