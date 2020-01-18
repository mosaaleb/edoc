import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ValidationError from '../ValidationError';
import { signUpWithUserData } from '../../actions/asyncActions';

const SignUp = ({ signUpWithUserData, validationErrors }) => {
  const [inputFields, setInputFields] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpWithUserData(inputFields);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        placeholder="Email"
        value={inputFields.email}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, email: e.target.value })}
        className="p-1 border-2"
      />
      <ValidationError
        inputField="Email"
        isValid={validationErrors.isValid}
        error={validationErrors.errors.email}
      />
      <input
        type="text"
        placeholder="First Name"
        value={inputFields.first_name}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, first_name: e.target.value })}
        className="p-1 border-2"
      />
      <ValidationError
        inputField="First Name"
        isValid={validationErrors.isValid}
        error={validationErrors.errors.first_name}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={inputFields.last_name}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, last_name: e.target.value })}
        className="p-1 border-2"
      />
      <ValidationError
        inputField="Last Name"
        isValid={validationErrors.isValid}
        error={validationErrors.errors.last_name}
      />
      <input
        type="password"
        autoComplete="password"
        placeholder="Password"
        value={inputFields.password}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, password: e.target.value })}
        className="p-1 border-2"
      />
      <ValidationError
        inputField="Password"
        isValid={validationErrors.isValid}
        error={validationErrors.errors.password}
      />
      <input
        type="password"
        autoComplete="password"
        placeholder="Password Confirmation"
        value={inputFields.password_confirmation}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, password_confirmation: e.target.value })}
        className="p-1 border-2"
      />
      <ValidationError
        inputField="Password Confirmation"
        isValid={validationErrors.isValid}
        error={validationErrors.errors.password_confirmation}
      />
      <button type="submit">Create Account</button>
    </form>
  );
};

SignUp.propTypes = {
  signUpWithUserData: PropTypes.func.isRequired,
  validationErrors: PropTypes.shape({
    isValid: PropTypes.bool.isRequired,
    errors: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
  }).isRequired
};

const mapStateToProps = (state) => ({
  notification: state.notification,
  validationErrors: state.validationErrors
});

export default connect(mapStateToProps, { signUpWithUserData })(SignUp);
