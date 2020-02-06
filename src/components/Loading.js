import React from 'react';
import spinner from '../assets/spinner.svg';

const Loading = () => (
  <div className="bg-transparent-white h-full flex justify-center rounded-full">
    <img src={spinner} alt="spinner" />
  </div>
);

export default Loading;
