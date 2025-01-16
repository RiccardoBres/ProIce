import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import styled from 'styled-components';
import CustomParagraph from '../../Atoms/CustomParagraph';

const Hero = ({ background, isVideo, titleHero, paragraph }) => {
  return (
    <HeroContainer>
      {isVideo ? (
        <VideoBackground autoPlay muted loop>
          <source src={background} type="video/mp4" />
        </VideoBackground>
      ) : (
        <ImageBackground style={{ backgroundImage: `url(${background})` }} />
      )}
      <HeroContent>
        <CustomTitle className="hero-title" text={titleHero}/>
        <CustomParagraph className="hero-paragraph" text={paragraph}/>
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

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;

  .hero-title {
    color: white;
    font-size: 4rem;
    font-weight: bold!important;
    letter-spacing: -8px;
  }
    .hero-paragraph{
    color: white;
    font-size: 2.5rem;
    font-weight: 100;
    letter-spacing: 8px;
  }
`;
