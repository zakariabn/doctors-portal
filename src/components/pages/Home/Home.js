import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HomeAppointment from './Appointment/HomeAppointment';
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
      <HomeAppointment></HomeAppointment>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;