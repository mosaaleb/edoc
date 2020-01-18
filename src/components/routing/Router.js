import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import App from '../App';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import FourOhFour from '../FourOhFour';
import Doctors from '../doctors/Doctors';
import Specialities from '../specialities/Specialities';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute exact path="/doctors" component={Doctors} />
      <PrivateRoute exact path="/specialities" component={Specialities} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default Router;

// TODO: remove app if not needed


/* <Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route> */

// https://reacttraining.com/react-router/web/api/Redirect
