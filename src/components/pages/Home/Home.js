import React from 'react';
import Appointment from './Appointment/Appointment';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import Review from './Review/Review';
import Services from './Services/Services';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <Appointment></Appointment>
      <Review></Review>
      <Contact></Contact>
    </div>
  );
};

export default Home;