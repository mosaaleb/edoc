import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SignedInLinks = ({ handleSignOut }) => (
  <>
    <a
      href="/doctors"
      className="block mt-1 font-bold text-sm uppercase p-1 px-1 rounded text-teal-500 hover:bg-teal-200 sm:px-1 sm:mx-5 text-sm text-center"
    >
      Doctors
    </a>
    <a
      href="/specialities"
      className="block mt-1 font-bold text-sm uppercase p-1 px-1 rounded text-teal-500 hover:bg-teal-200 sm:px-1 sm:mx-5 text-sm text-center"
    >
      Specialities
    </a>
    <button
      type="button"
      onClick={handleSignOut}
      className="w-full mt-1 font-bold text-sm uppercase p-1 px-1 rounded text-teal-500 hover:bg-teal-200 sm:px-1 sm:mx-5 mb-3 sm:mb-0 focus:outline-none"
    >
      Sign Out
    </button>
  </>
);

SignedInLinks.propTypes = {
  handleSignOut: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(SignedInLinks);
