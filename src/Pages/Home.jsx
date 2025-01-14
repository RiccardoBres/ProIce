import React from 'react';
import Navbar from '../Components/Organisms/NavbarOrganism/Navbar';
import Hero from '../Components/Organisms/HeroOrganism/Hero';
import HeroImg from '../Layout/Assets/Herobg.jpg';
import GeneralInfo from '../Components/Organisms/GeneralInfoOrganism/GeneralInfo';

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero background={HeroImg} titleHero='PROICE' paragraph='MADE OF COOLNESS'/>
        <GeneralInfo/>
    </>
  )
}

export default Home;
