/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (auth.isAuthenticated
      ? <Component {...props} /> : <Redirect to="/signin" />)}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  auth: PropTypes.instanceOf({
    isAuthenticated: PropTypes.bool.isRequired
  }).isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
