import React from 'react';
import CallToAction from '../components/CallToAction';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Week from '../components/Week';

function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Week />
      <CallToAction />
    </>
  );
}

export default Home;
