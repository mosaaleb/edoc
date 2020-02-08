import React from 'react';
import SignUpForm from './SignUpForm';

const SignUp = () => (
  <div className="flex items-center w-full justify-center h-screen bg-teal-100 font-montserrat">
    <div className="w-4/5 max-w-md">
      <div className="text-center my-8 text-gray-900">
        <h2 className="text-teal-500 font-bold text-3xl leading-loose">
          <span className="text-gray-700">E</span>
          Doc
        </h2>
        <h3 className="font-bold uppercase">Sign up to continue</h3>
      </div>
      <SignUpForm />
    </div>
  </div>
);

export default SignUp;
