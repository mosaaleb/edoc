import React from 'react';
import PropTypes from 'prop-types';

const ValidationError = ({ inputField, isValid, error }) => {
  const errors = error.map((err) => (
    <p key={err} className="text-red-600 text-xs">
      *&nbsp;
      {inputField}
      &nbsp;
      {err}
    </p>
  ));
  return <div className="px-3">{isValid ? null : errors}</div>;
};

ValidationError.defaultProps = {
  error: []
};

ValidationError.propTypes = {
  inputField: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  error: PropTypes.arrayOf(PropTypes.string)
};

export default ValidationError;
