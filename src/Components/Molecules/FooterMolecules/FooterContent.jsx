import React from 'react';
import styled from 'styled-components';
import Logo from '../../../Layout/Assets/Logotipo.png';
import { useNavigate } from 'react-router-dom';


const FooterContent = () => {
  const navigate = useNavigate();

  const handleNavigate = (title) => {
      navigate(title);
  };

  return (
    <FooterWrapper>
      <img src={Logo} alt="logo-footer" className='logo-footer'/>
    <FooterInfo>
      <p>&copy; 2025 ProIce. All Rights Reserved.</p>
      <FooterLinks>
        <FooterLink onClick={() => handleNavigate('/privacy-policy')}>Privacy Policy</FooterLink>
        <FooterLink onClick={() => handleNavigate('/terms-of-sale')}>Terms of Service</FooterLink>
        <FooterLink onClick={() => handleNavigate('/where')}>Contact</FooterLink>
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
  cursor: pointer;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
          color: rgb(248, 224, 173);
  }
`;
