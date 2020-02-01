import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { signInWithEmailAndPassword } from '../../actions/asyncActions';

const SignInForm = ({ signInWithEmailAndPassword, history }) => {
  const [inputFields, setInputFields] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(inputFields, history);
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
        className="uppercase text-gray-100 py-2 rounded-full bg-gradient focus:outline-none my-2 shadow-md"
      >
        Sign In
      </button>
    </form>
  );
};

SignInForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  signInWithEmailAndPassword: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  notification: state.notification
});

export default connect(mapStateToProps, { signInWithEmailAndPassword })(
  withRouter(SignInForm)
);
