import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from '../App';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import DoctorSignUp from '../auth/DoctorSignUp';
import Notification from '../Notification';

const Router = ({ isAuthenticated, notification }) => (
  <>
    {notification ? <Notification /> : null}
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin">
          {isAuthenticated ? <Redirect to="/specialities" /> : <SignIn />}
        </Route>
        <Route exact path="/signup">
          {isAuthenticated ? <Redirect to="/specialities" /> : <SignUp />}
        </Route>
        <Route exact path="/doctorsignup">
          {isAuthenticated ? <Redirect to="/specialities" /> : <DoctorSignUp />}
        </Route>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </>
);


Router.defaultProps = {
  notification: null
};

Router.propTypes = {
  notification: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired
};


const mapStateToProps = (state) => ({
  notification: state.notification,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Router);
