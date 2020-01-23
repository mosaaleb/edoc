import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => (
  <>
    <Link
      to="/signin"
      className="block mt-1 font-bold text-sm uppercase p-1 px-1 rounded text-teal-500 hover:bg-teal-200 sm:px-1 sm:mx-5 text-sm text-center"
    >
      Sign In
    </Link>
    <Link
      to="/signup"
      className="block mt-1 font-bold text-sm uppercase p-1 px-1 mb-3 rounded text-teal-500 hover:bg-teal-200 sm:px-1 sm:mx-5 text-sm text-center"
    >
      Sign Up
    </Link>
  </>
);

export default SignedOutLinks;
