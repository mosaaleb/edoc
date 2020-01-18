import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signInWithEmailAndPassword } from '../../actions/asyncActions';

const SignIn = ({ signInWithEmailAndPassword }) => {
  const [inputFields, setInputFields] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(inputFields);
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
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, password: e.target.value })}
        className="border-2 border"
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

SignIn.propTypes = {
  signInWithEmailAndPassword: PropTypes.func.isRequired
};

export default connect(null, { signInWithEmailAndPassword })(SignIn);
