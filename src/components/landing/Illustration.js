import React from 'react';
import PropTypes from 'prop-types';

const Illustration = ({ image, heading, title }) => (
  <div>
    <h3 className="font-bold text-gray-900 text-xl">{heading}</h3>
    <h2 className="font-bold text-teal-500 text-xl">{title}</h2>
    <hr className="block border-2 border-teal-500 w-1/6 mt-2" />
    <img src={image} alt={image} className="mb-5" />
  </div>
);

Illustration.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Illustration;
