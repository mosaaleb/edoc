import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { signInWithEmailAndPassword } from '../../actions/asyncActions';
import { setIsLoading, resetIsLoading } from '../../actions/loadingActions';
import Loading from '../Loading';

const SignInForm = ({
  history,
  loading,
  setIsLoading,
  resetIsLoading,
  signInWithEmailAndPassword
}) => {
  const [inputFields, setInputFields] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading();
    signInWithEmailAndPassword(inputFields, history).then(() => {
      resetIsLoading();
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        placeholder="Email"
        value={inputFields.email}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, email: e.target.value })}
        className="py-2 px-4 rounded-full focus:outline-none my-3 shadow-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={inputFields.password}
        autoComplete="Current Password"
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, password: e.target.value })}
        className="py-2 px-4 rounded-full focus:outline-none my-3 shadow-md"
      />
      <button
        type="submit"
        className="uppercase text-gray-100 h-12 rounded-full bg-gradient focus:outline-none my-2 shadow-md"
      >
        {loading ? <Loading /> : 'Sign In'}
      </button>
    </form>
  );
};

SignInForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  resetIsLoading: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  signInWithEmailAndPassword: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.loading
});

export default connect(mapStateToProps, {
  setIsLoading,
  resetIsLoading,
  signInWithEmailAndPassword
})(withRouter(SignInForm));
