import React from 'react';
import { motion } from 'framer-motion';
import SocialCard from '../../Molecules/CardsMolecules/SocialCard';
import CustomTitle from '../../Atoms/CustomTitle';
import { Col, Container, Row } from 'react-bootstrap';
import Social1 from '../../../Layout/Assets/CarouselProducts/Carousel1.jpeg';
import Social2 from '../../../Layout/Assets/CarouselProducts/Carousel2.jpeg';
import Social3 from '../../../Layout/Assets/CarouselProducts/Carousel3.jpeg';
import Social4 from '../../../Layout/Assets/socialIstant1_files/social4.jpg';
import Social5 from '../../../Layout/Assets/socialIstant1_files/social5.jpg';
import Social6 from '../../../Layout/Assets/socialIstant1_files/social6.jpg';
import styled from 'styled-components';

const SocialInstants = () => {
  // Dati delle card
  const cardData = [
    {
      imageUrl: Social1,
      description: 'Descrizione fittizia 1',
      instagramLink: 'https://www.instagram.com/proice.pt',
    },
    {
      imageUrl: Social2,
      description: 'Descrizione fittizia 2',
      instagramLink: 'https://www.instagram.com/proice.pt',
    },
    {
      imageUrl: Social3,
      description: 'Descrizione fittizia 3',
      instagramLink: 'https://www.instagram.com/proice.pt',
    },
    {
      imageUrl: Social4,
      description: 'Descrizione fittizia 4',
      instagramLink: 'https://www.instagram.com/proice.pt',
    },
    {
      imageUrl: Social5,
      description: 'Descrizione fittizia 5',
      instagramLink: 'https://www.instagram.com/proice.pt',
    },
    {
      imageUrl: Social6,
      description: 'Descrizione fittizia 6',
      instagramLink: 'https://www.instagram.com/proice.pt',
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <SocialContainer>
      <Container className="container-social-cards">
        <motion.div
          className="social-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <CustomTitle text="SOCIAL INSTANTS" />
        </motion.div>
        <Row className="row justify-content-center">
          {cardData.map((card, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={4} className="col-card">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SocialCard
                  imageUrl={card.imageUrl}
                  description={card.description}
                  instagramLink={card.instagramLink}
                />
              </motion.div>
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
    margin: auto;
  }

  .row {
    padding-top: 50px !important;
      background-color: #131313;
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
      padding: 20px;
    }

    @media (max-width: 576px) {
      margin-bottom: 0px;
      padding: 25px;
    }
  }
`;
