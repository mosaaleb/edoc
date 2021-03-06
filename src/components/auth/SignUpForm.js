import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import ValidationError from '../ValidationError';
import { signUpWithUserData } from '../../actions/asyncActions';
import Loading from '../Loading';
import { setIsLoading, resetIsLoading } from '../../actions/loadingActions';

const SignUpForm = ({
  history,
  loading,
  setIsLoading,
  resetIsLoading,
  validationErrors,
  signUpWithUserData
}) => {
  const { isValid, errors } = validationErrors;
  const [inputFields, setInputFields] = useState({
    email: '',
    password: '',
    last_name: '',
    first_name: '',
    password_confirmation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading();
    signUpWithUserData(inputFields, history).then(() => {
      resetIsLoading();
    });
  };

  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        placeholder="Email"
        value={inputFields.email}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, email: e.target.value })}
        className={`py-2 px-4 rounded-full focus:outline-none my-3 shadow-md 
        ${errors['account.email'] ? 'border border-red-600' : ''}`}
      />
      <ValidationError
        inputField="Email"
        isValid={isValid}
        error={errors['account.email']}
      />
      <input
        type="text"
        placeholder="First Name"
        value={inputFields.first_name}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, first_name: e.target.value })}
        className={`py-2 px-4 rounded-full focus:outline-none my-3 shadow-md 
        ${errors['account.first_name'] ? 'border border-red-600' : ''}`}
      />
      <ValidationError
        inputField="First Name"
        isValid={isValid}
        error={errors['account.first_name']}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={inputFields.last_name}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, last_name: e.target.value })}
        className={`py-2 px-4 rounded-full focus:outline-none my-3 shadow-md 
        ${errors['account.last_name'] ? 'border border-red-600' : ''}`}
      />
      <ValidationError
        inputField="Last Name"
        isValid={isValid}
        error={errors['account.last_name']}
      />
      <input
        type="password"
        autoComplete="password"
        placeholder="Password"
        value={inputFields.password}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, password: e.target.value })}
        className={`py-2 px-4 rounded-full focus:outline-none my-3 shadow-md 
        ${errors['account.password'] ? 'border border-red-600' : ''}`}
      />
      <ValidationError
        inputField="Password"
        isValid={isValid}
        error={errors['account.password']}
      />
      <input
        type="password"
        autoComplete="password"
        placeholder="Password Confirmation"
        value={inputFields.password_confirmation}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, password_confirmation: e.target.value })}
        className={`py-2 px-4 rounded-full focus:outline-none my-3 shadow-md 
        ${
          errors['account.password_confirmation'] ? 'border border-red-600' : ''
        }`}
      />
      <ValidationError
        inputField="Password Confirmation"
        isValid={isValid}
        error={errors['account.password_confirmation']}
      />
      <button
        type="submit"
        className="uppercase text-gray-100 h-12 rounded-full bg-gradient focus:outline-none my-2 shadow-md"
      >
        {loading ? <Loading /> : 'Create Account'}
      </button>
    </form>
  );
};

SignUpForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  resetIsLoading: PropTypes.func.isRequired,
  signUpWithUserData: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  validationErrors: PropTypes.shape({
    isValid: PropTypes.bool.isRequired,
    errors: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
  }).isRequired
};

const mapStateToProps = (state) => ({
  notification: state.notification,
  loading: state.loading,
  validationErrors: state.validationErrors
});

export default connect(mapStateToProps, {
  setIsLoading,
  resetIsLoading,
  signUpWithUserData,
})(withRouter(SignUpForm));
