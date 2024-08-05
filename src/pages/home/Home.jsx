import React from 'react';
import './home.css';
import '../../App.css';
import HeroSection from '../../components/heroSection/HeroSection';
import Cards from '../../components/cards/Cards';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
    </>
  );
}

export default Home;
