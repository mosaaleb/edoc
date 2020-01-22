import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import FourOhFour from '../FourOhFour';
import Doctors from '../doctors/Doctors';
import Specialities from '../specialities/Specialities';
import LandingPage from '../landing/LandingPage';

const Content = () => (
  <div className="w-full max-w-3xl bg-teal-100 mx-auto px-8">
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/doctors" component={Doctors} />
      <Route path="/specialities" component={Specialities} />
      <PrivateRoute path="/specialities/:id/doctors" component={Doctors} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
);

export default Content;
