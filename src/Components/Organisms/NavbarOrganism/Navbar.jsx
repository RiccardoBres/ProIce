import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomImage from '../../Atoms/CustomImage';
import Logo from '../../../Layout/Assets/Logo.png';
import LogoTipo from '../../../Layout/Assets/Logotipo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const titles = ['Home', 'Company', 'WhyProIce', 'Products', 'Where'];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <NavContainer scrolled={scrolled}>
                <CustomImage src={Logo} className="logo-nav" />
            <NavMenu>
                {titles.map((title, index) => (
                    <CustomTitle key={index} className="nav-title" text={title} />
                ))}
            </NavMenu>
                <CustomImage src={LogoTipo} className="logo-nav" />
        </NavContainer>
    );
};

export default Navbar;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ scrolled }) => (scrolled ? '' : 'transparent')};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  padding: ${({ scrolled }) => (scrolled ? '0' : '1rem 2rem')};
  transition: background 1s ease, backdrop-filter 1s ease, padding 1s ease;
  z-index: 1000;

  .logo-nav {
    width: 10%;
    @media (max-width: 768px) {
      max-width: 20%;
    }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;


const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-title {
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 0 1rem;
    transition: color 0.2s ease;

    &:hover {
      color: rgb(198, 239, 245);
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      margin: 0.5rem;
    }
  }
`;
