import React from 'react';
import './home.css';
import '../../App.css';
import HeroSection from '../../components/heroSection/HeroSection';
import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
      <Footer/>
    </>
  );
}

export default Home;
