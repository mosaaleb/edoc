import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import FourOhFour from '../FourOhFour';
import Doctors from '../doctors/Doctors';
import Specialities from '../specialities/Specialities';
import LandingPage from '../landing/LandingPage';
import DoctorProfile from '../doctors/DoctorProfile';

const Content = () => (
  <div className="w-full max-w-3xl mx-auto px-8 pt-10">
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <PrivateRoute exact path="/doctors" component={Doctors} />
      <PrivateRoute exact path="/specialities" component={Specialities} />
      <PrivateRoute path="/specialities/:id/doctors" component={Doctors} />
      <PrivateRoute path="/doctors/:id" component={DoctorProfile} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
);

export default Content;
