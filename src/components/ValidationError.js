import React from 'react';
import PropTypes from 'prop-types';

const ValidationError = ({ isValid, error }) => {
  const errors = error.map((err) => (
    <p key={err} className="text-red-600">
      *&nbsp;
      {err}
    </p>
  ));
  return <div className="h-6">{isValid ? null : errors}</div>;
};

ValidationError.defaultProps = {
  error: []
};

ValidationError.propTypes = {
  isValid: PropTypes.bool.isRequired,
  error: PropTypes.arrayOf(PropTypes.string)
};

export default ValidationError;
