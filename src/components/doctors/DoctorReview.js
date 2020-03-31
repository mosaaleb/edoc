import React from 'react';
import PropTypes from 'prop-types';

const DoctorReview = ({ review }) => (
  <div className="shadow-md p-4 my-5">
    {review.review}
  </div>
);

DoctorReview.propTypes = {
  review: PropTypes.objectOf({}).isRequired
};

export default DoctorReview;
