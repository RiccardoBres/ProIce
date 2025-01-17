import React from 'react';
import ResponsiveNavbar from '../Components/Organisms/NavbarOrganism/ResponsiveNavbar';
import Hero from '../Components/Organisms/HeroOrganism/Hero';
import HeroImg from '../Layout/Assets/Herobg.jpg';
import GeneralInfo from '../Components/Organisms/GeneralInfoOrganism/GeneralInfo';
import ProductOrganism from '../Components/Organisms/ProductCarouselOrganism/ProductOrganism';
import SocialInstants from '../Components/Organisms/SocialIstantsOrganism/SocialInstants';
import FormSection from '../Components/Organisms/ContactFormOrganism/FormSection';
import FooterContent from '../Components/Molecules/FooterMolecules/FooterContent';

const Home = () => {
  return (
    <>
      <ResponsiveNavbar />
      <Hero background={HeroImg} titleHero="PROICE" paragraph="MADE OF COOLNESS" />
      <GeneralInfo />
      <ProductOrganism/>
      <SocialInstants/>
      <FormSection/>
      <FooterContent/>
    </>
  );
};

export default Home;
