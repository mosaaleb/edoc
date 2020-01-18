import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ValidationError from '../ValidationError';
import { signUpWithUserData } from '../../actions/asyncActions';

const SignUp = ({ signUpWithUserData }) => {
  const [validations, setValidations] = useState({ isValid: true, errors: {} });
  const [inputFields, setInputFields] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpWithUserData(inputFields).catch((error) => {
      setValidations({
        isValid: false,
        errors: error.response.data.message
      });
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={inputFields.email}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, email: e.target.value })}
        className="p-1 border-2"
      />
      <ValidationError
        error={validations.errors.email}
        isValid={validations.isValid}
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
        error={validations.errors.first_name}
        isValid={validations.isValid}
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
        error={validations.errors.password}
        isValid={validations.isValid}
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
        error={validations.errors.password}
        isValid={validations.isValid}
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
        error={validations.errors.password_confirmation}
        isValid={validations.isValid}
      />
      <button type="submit">Create Account</button>
    </form>
  );
};

SignUp.propTypes = {
  signUpWithUserData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  notification: state.notification
});

export default connect(mapStateToProps, { signUpWithUserData })(SignUp);
