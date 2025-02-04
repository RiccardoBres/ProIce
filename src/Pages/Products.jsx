import React from 'react';
import ResponsiveNavbar from '../Components/Organisms/NavbarOrganism/ResponsiveNavbar';
import Hero from '../Components/Organisms/HeroOrganism/Hero';
import HeroImage from '../Layout/Assets/hero-products.jpg';
import ProductPage from '../Components/Organisms/ProductsPageOrganism/ProductPage';
import FormSection from '../Components/Organisms/ContactFormOrganism/FormSection';
import FooterContent from '../Components/Molecules/FooterMolecules/FooterContent';

const Products = () => {
  return (
    <>
    <ResponsiveNavbar/>
    <Hero background={HeroImage} titleHero="PRODUCTS" paragraph="THE ULTIMATE ICE" />
    <ProductPage/>
    <FormSection/>
    <FooterContent/>
    </>
  )
}

export default Products
