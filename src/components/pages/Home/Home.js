import React from 'react';
import Appointment from './Appointment/Appointment';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import Review from './Review/Review';
import Services from './Services/Services';

const Home = () => {
  return (
    <div className='flex flex-col items-center mb-20'>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <Appointment></Appointment>
      <Review></Review>
    </div>
  );
};

export default Home;