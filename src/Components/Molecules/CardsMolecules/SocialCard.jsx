import React from 'react';
import styled from 'styled-components';

const SocialCard = ({ imageUrl, description, instagramLink }) => {
    return (
        <CardContainer>
            <ImageWrapper imageUrl={imageUrl} />
            <InstagramLink href={instagramLink} target="_blank">
                IG
            </InstagramLink>
            <Description>{description}</Description>
        </CardContainer>
    );
};

export default SocialCard;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 16px; /* Spaziatura predefinita tra le card */

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
    height: 350px; /* Riduci l'altezza per adattarsi meglio agli schermi più piccoli */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.imageUrl}) center/cover no-repeat;
  transition: filter 0.3s ease, transform 0.3s ease;
  filter: grayscale(100%);
  
  &:hover {
    filter: grayscale(0%);
  }
`;

const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
  
  ${CardContainer}:hover & {
    transform: translateY(0);
  }
`;

const InstagramLink = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 50%;
  text-decoration: none;
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${CardContainer}:hover & {
    opacity: 1;
  }
`;
