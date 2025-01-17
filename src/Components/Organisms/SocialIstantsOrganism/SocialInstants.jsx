import React from 'react';
import SocialCard from '../../Molecules/CardsMolecules/SocialCard';
import CustomTitle from '../../Atoms/CustomTitle';
import { Col, Container, Row } from 'react-bootstrap';
import Social1 from '../../../Layout/Assets/CarouselProducts/Carousel1.jpeg';
import Social2 from '../../../Layout/Assets/CarouselProducts/Carousel2.jpeg';
import Social3 from '../../../Layout/Assets/CarouselProducts/Carousel3.jpeg';
import Social4 from '../../../Layout/Assets/CarouselProducts/Carousel1.jpeg';
import Social5 from '../../../Layout/Assets/CarouselProducts/Carousel2.jpeg';
import Social6 from '../../../Layout/Assets/CarouselProducts/Carousel3.jpeg';
import styled from 'styled-components';

const SocialInstants = () => {
  // Dati delle card
  const cardData = [
    {
      imageUrl: Social1,
      description: "Descrizione fittizia 1",
      instagramLink: "https://www.instagram.com/tuoaccount1/"
    },
    {
      imageUrl: Social2,
      description: "Descrizione fittizia 2",
      instagramLink: "https://www.instagram.com/tuoaccount2/"
    },
    {
      imageUrl: Social3,
      description: "Descrizione fittizia 3",
      instagramLink: "https://www.instagram.com/tuoaccount3/"
    },
    {
      imageUrl: Social4,
      description: "Descrizione fittizia 4",
      instagramLink: "https://www.instagram.com/tuoaccount4/"
    },
    {
      imageUrl: Social5,
      description: "Descrizione fittizia 5",
      instagramLink: "https://www.instagram.com/tuoaccount5/"
    },
    {
      imageUrl: Social6,
      description: "Descrizione fittizia 6",
      instagramLink: "https://www.instagram.com/tuoaccount6/"
    }
  ];

  return (
    <SocialContainer>
      <Container className="container-social-cards">
        <CustomTitle text="SOCIAL INSTANTS" className="social-title" />
        <Row className="row justify-content-center">
          {cardData.map((card, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4} className="col-card">
              <SocialCard
                imageUrl={card.imageUrl}
                description={card.description}
                instagramLink={card.instagramLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </SocialContainer>
  );
};

export default SocialInstants;

const SocialContainer = styled.div`
  background-color: #131313;
  padding: 80px 0;

  .container-social-cards {
  background-color: #131313;
    max-width: 1000px;
  }

  .row {
  background-color: #131313;
    padding-top: 50px !important;
    padding-bottom: 50px;
  }

  .social-title {
    font-size: 2rem;
    color: white;
    text-align: center;
  }

  .col-card {
    margin-bottom: 30px; /* Spazio extra tra le colonne */
    padding: 10px;

    @media (max-width: 768px) {
      padding: 20px; /* Aggiungi più respiro intorno alle card */
    }

    @media (max-width: 576px) {
      margin-bottom: 0px; 
      padding: 25px; /* Aumenta ulteriormente il respiro */
    }
  }
`;
