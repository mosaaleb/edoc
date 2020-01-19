import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => (
  <div>
    <Link to="/signup">I am Searching for a Doctor</Link>
    <Link to="/doctorsignup">I am a Doctor</Link>
  </div>
);

export default Content;
