import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomTitle from '../../Atoms/CustomTitle';
import styled from 'styled-components';
import CustomParagraph from '../../Atoms/CustomParagraph';

const Hero = ({ background, isVideo, titleHero, paragraph }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isVideo) {
      const img = new Image();
      img.src = background;
      img.onload = () => setIsLoaded(true); // Aggiorna lo stato quando l'immagine è caricata
    }
  }, [background, isVideo]);

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
      {isVideo ? (
        <VideoBackground autoPlay muted loop>
          <source src={background} type="video/mp4" />
        </VideoBackground>
      ) : (
        <>
          {!isLoaded && <Placeholder />}
          {isLoaded && (
            <ImageBackground style={{ backgroundImage: `url(${background})` }} />
          )}
        </>
      )}
      <HeroContent>
        <motion.div
          className="hero-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <CustomTitle text={titleHero} className="hero-title" />
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

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
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
  overlay: hide;
  height: 100%;
  background-color:rgb(188, 225, 247); /* Colore di fallback */
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

  .hero-title {
    color: white;
    font-size: 4rem;
    font-weight: 100 !important;
    letter-spacing: -8px;
  }
  .hero-paragraph {
    color: white;
    font-size: 2.5rem;
    font-weight: 100;
    letter-spacing: 8px;
  }
`;
