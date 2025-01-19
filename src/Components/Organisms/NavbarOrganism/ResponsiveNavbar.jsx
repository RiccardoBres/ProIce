import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomTitle from '../../Atoms/CustomTitle';
import CustomImage from '../../Atoms/CustomImage';
import Logo from '../../../Layout/Assets/Logo.png';
import LogoTipo from '../../../Layout/Assets/Logotipo.png';

const ResponsiveNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navigate = useNavigate();

  const titles = ['Home', 'Products', 'Where'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  const handleNavigate = (title) => {
    // Se il titolo è "Home", naviga alla root '/'
    const path = title === 'Home' ? '/' : `/${title.toLowerCase()}`;
    navigate(path);
  };

  return (
    <>
      <NavContainer scrolled={scrolled}>
        <CustomImage src={Logo} className="logo-nav primary-logo" alt="Logo" />
        <NavMenu>
          {titles.map((title, index) => (
            <CustomTitle
              key={index}
              className="nav-title"
              text={title}
              onClick={() => handleNavigate(title)} // Usa handleNavigate
            />
          ))}
        </NavMenu>
        <HamburgerMenu onClick={toggleOffcanvas}>
          <span />
          <span />
          <span />
        </HamburgerMenu>
        <CustomImage src={LogoTipo} className="logo-nav secondary-logo" alt="LogoTipo" />
      </NavContainer>

      <Offcanvas show={showOffcanvas}>
        <CloseButton onClick={toggleOffcanvas}>×</CloseButton>
        {titles.map((title, index) => (
          <CustomTitle
            key={index}
            className="offcanvas-title"
            text={title}
            onClick={() => {
              toggleOffcanvas(); // Chiude l'offcanvas
              handleNavigate(title); // Naviga alla pagina
            }}
          />
        ))}
        <CustomImage src={LogoTipo} className="logo-nav w-50" alt="LogoTipo" />
      </Offcanvas>
    </>
  );
};

export default ResponsiveNavbar;


const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: ${({ scrolled }) => (scrolled ? '1rem 2rem' : '0.5rem 1rem')};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(5px)' : 'none')};
  transition: background 0.3s ease, padding 0.3s ease;
  z-index: 1000;

  .logo-nav {
    width: 10%;
    @media (max-width: 768px) {
          width: 40%;
    }
  }

  .secondary-logo {
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 2rem;

  .nav-title {
    font-size: 1rem;
    color: white;
    text-transform: uppercase;
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
      color: rgb(248, 224, 173);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  margin-right: 30px;
  height: 20px;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: white;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Offcanvas = styled.div`
  position: fixed;
  top: 0;
  right: ${({ show }) => (show ? '0' : '-100%')};
  width: 280px;
  height: 100%;
  background-color: #000000e8;
  backdrop-filter: blur(5px);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: right 0.3s ease;
  z-index: 1100;

  .offcanvas-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
    text-transform: uppercase;
    transition: color 0.2s ease;

    &:hover {
      color: rgb(182, 169, 101);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: rgb(70, 128, 136);
  }
`;
