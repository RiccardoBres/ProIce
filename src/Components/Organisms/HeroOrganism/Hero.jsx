import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomTitle from '../../Atoms/CustomTitle';
import Logotipo from '../../../Layout/Assets/LogotipoHero.png';
import styled from 'styled-components';
import CustomParagraph from '../../Atoms/CustomParagraph';

const Hero = ({ background, titleHero, paragraph }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => setIsLoaded(true);
  }, [background]);

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <HeroContainer>
      {!isLoaded && <Placeholder />}
      {isLoaded && (
        <ImageBackground style={{ backgroundImage: `url(${background})` }} />
      )}
      <HeroContent>
        <motion.div
          className="hero-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={Logotipo} className="hero-title" />
        </motion.div>
        <motion.div
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
        >
          <CustomParagraph text={paragraph} className="hero-paragraph" />
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(188, 225, 247);
  z-index: -1;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.4;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;

  .hero-paragraph {
    color: white;
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: 5px;

     @media (max-width: 768px) {
      font-size: 2rem;
    letter-spacing: 0px;
    margin-top: 1rem;
  }
  }

  
`;


