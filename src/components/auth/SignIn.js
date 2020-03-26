import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm';

const SignIn = () => (
  <div className="flex items-center w-full justify-center h-screen bg-teal-100 font-montserrat">
    <div className="w-4/5 max-w-md">
      <div className="text-center my-8 text-gray-900">
        <h2 className="text-teal-500 font-bold text-3xl leading-loose">
          <span className="text-gray-700">E</span>
          Doc
        </h2>
        <h3 className="font-bold uppercase">Welcome Back</h3>
        <p className="text-sm">Please sign in to continue</p>
      </div>
      <SignInForm />
      <div className="text-center pt-3">
        Not a user?
        {' '}
        <Link to="signup" className="text-teal-500 underline font-semibold">Sign Up</Link>
      </div>
    </div>
  </div>
);

export default SignIn;
