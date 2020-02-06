import React from 'react';
import Illustration from './Illustration';


import all from '../../assets/all.png';
import chat from '../../assets/chat.png';
import doctor from '../../assets/doctor.png';

const LandingPage = () => (
  <div className="p-4 font-montserrat">
    <Illustration image={all} heading="All-In-One" title="App" />
    <Illustration image={chat} heading="One click" title="Online Chat" />
    <Illustration image={doctor} heading="Ask the" title="Expert" />
  </div>
);

export default LandingPage;
