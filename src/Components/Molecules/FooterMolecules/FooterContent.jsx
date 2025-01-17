import React from 'react';
import styled from 'styled-components';
import Logo from '../../../Layout/Assets/Logotipo.png';

const FooterContent = () => {
  return (
    <FooterWrapper>
      <img src={Logo} alt="logo-footer" className='logo-footer'/>
    <FooterInfo>
      <p>&copy; 2025 Ice Cube. All Rights Reserved.</p>
      <FooterLinks>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms of Service</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinks>
    </FooterInfo>
  </FooterWrapper>
  )
}

export default FooterContent

// Styled Components for Footer
const FooterWrapper = styled.footer`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;

  .logo-footer{
    width: 10%;

    @media (max-width: 576px) {
        width: 50%;
  }
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 15px;
  font-size: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
