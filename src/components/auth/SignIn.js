import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { signInWithEmailAndPassword } from '../../actions/asyncActions';

const SignIn = ({ signInWithEmailAndPassword, history }) => {
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
        className="border-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={inputFields.password}
        autoComplete="Current Password"
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, password: e.target.value })}
        className="border-2 border"
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

SignIn.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  signInWithEmailAndPassword: PropTypes.func.isRequired
};

export default connect(null, { signInWithEmailAndPassword })(withRouter(SignIn));
