import React from 'react';
import ResponsiveNavbar from '../Components/Organisms/NavbarOrganism/ResponsiveNavbar';
import FooterContent from '../Components/Molecules/FooterMolecules/FooterContent';
import PrivacyPolicyContent from '../Components/Organisms/PrivacyPolicyOrganism/PrivacyPolicyContent';

const PrivacyPolicy = () => {
  return (
    <>
    <ResponsiveNavbar/>
    <PrivacyPolicyContent/>
    <FooterContent/>
    </>
  )
}

export default PrivacyPolicy
