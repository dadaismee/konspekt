import React from 'react';
import { Hero } from '../components';
import { hero } from '../pageData/home';

const potentialHome = () => {
  return <Hero data={hero} />;
};

export default potentialHome;
