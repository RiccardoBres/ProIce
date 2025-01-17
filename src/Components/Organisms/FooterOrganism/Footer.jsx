import React from 'react';
import FooterContent from '../../Molecules/FooterMolecules/FooterContent';
import styled from 'styled-components';

const Footer = () => {
  return (
    <SectionWrapperFooter>
      <FooterContent />
    </SectionWrapperFooter>
  );
};

export default Footer;

const SectionWrapperFooter = styled.section`
  background-color:black;
  display: flex;
  height: 200px:
  justify-content: center;
  align-items: center;
  padding: 4rem 0 ;
`;
