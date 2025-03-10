import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import ProductsCard from '../../Molecules/CardsMolecules/ProductsCard';

import Sphere from '../../../Layout/Assets/Products/sfere.png';
import Cubi from '../../../Layout/Assets/Products/Cubi.png';
import OldFashon from '../../../Layout/Assets/Products/oldfashion.png';
import Parallel from '../../../Layout/Assets/Products/parallele.png';
import Triangoli from '../../../Layout/Assets/Products/triangolo.png';


import Diamond from '../../../Layout/Assets/Products/diamond.png';
import Pumpkin from '../../../Layout/Assets/Products/pumpkin.png';
import Pineapple from '../../../Layout/Assets/Products/pineapple.png';
import Stick from '../../../Layout/Assets/Products/stick.png';
import Heart from '../../../Layout/Assets/Products/heart.png';


import LogoClassic from '../../../Layout/Assets/Products/logo-cubers-neg-h-en.png'; 
import Classic from '../../../Layout/Assets/Products/EU_2KG_Classic_N-768x948.png';
import Cocktails from '../../../Layout/Assets/Products/EU_2KG_Cocktail_web-768x948.png';
import IceBall from '../../../Layout/Assets/Products/F2_EU_ICEBALLS-1-768x948.png'; 
import MirrorBall from '../../../Layout/Assets/Products/mirorball.png'; 

import CustomTitle from '../../Atoms/CustomTitle';

const ProductPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const productsUltimate = [
    { imageSrc: Sphere, titles: ['SPHERE 5.5', 'SPHERE 6.5'], titlePosition: isMobile ? 'row' : 'side' },
    { imageSrc: Cubi, titles: ['CUBE 4x4x4', 'CUBE 5x5x5'], titlePosition: isMobile ? 'row' : 'row' },
    { imageSrc: OldFashon, titles: ['OLD-FASHIONED 5x5x7'], titlePosition: isMobile ? 'row' : 'side' },
    { imageSrc: Parallel, titles: ['COLLINS 4x4x6', 'COLLINS 4x4x10'], titlePosition: isMobile ? 'row' : 'row' },
    { imageSrc: Triangoli, titles: ['EGIPCIAN 2.5', 'EGIPCIAN 3.5'], titlePosition: isMobile ? 'row' : 'row' },
  ];

  const productsSublime = [
    { imageSrc: Diamond, titles: ['DIAMOND'], titlePosition: 'row' },
    { imageSrc: Pumpkin, titles: ['PUMPKIN'], titlePosition: 'row' },
    { imageSrc: Pineapple, titles: ['PINEAPPLE'], titlePosition: 'row' },
    { imageSrc: Stick, titles: ['STICK'], titlePosition: 'row' },
    { imageSrc: Heart, titles: ['HEART'], titlePosition: 'row' },
    { imageSrc: MirrorBall, titles: ['MIRROR BALL'], titlePosition: 'row' },
  ];

  const iceBrand = [
    { imageSrc: Classic, titles: ['CLASSIC ICE CUBE'], titlePosition: 'row' },
    { imageSrc: Cocktails, titles: ['COCKTAIL ICE'], titlePosition: 'row' },
    { imageSrc: IceBall, titles: ['ICE BALL', 'DOUBLE FREEZING'], titlePosition: 'row' },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <PageContainer>
      <motion.div
        className="title-ice"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CustomTitle text={'ULTIMATE ICE MENU'} />
      </motion.div>
      <Container>
        <Row>
          {productsUltimate.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4} className="col-products">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <ProductsCard
                  imageSrc={product.imageSrc}
                  titles={product.titles}
                  titlePosition={product.titlePosition}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      <motion.div
        className="title-ice"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CustomTitle text={'SUBLIME & HANDMADE'} />
      </motion.div>
      <Container>
        <Row>
          {productsSublime.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-5 p-2">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <ProductsCard
                  imageSrc={product.imageSrc}
                  titles={product.titles}
                  titlePosition={product.titlePosition}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      <motion.div
        className="title-ice"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={LogoClassic} className='img-logo-cubers' />
      </motion.div>
      <Container>
        <Row>
          {iceBrand?.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-5 p-2">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <ProductsCard
                  imageSrc={product.imageSrc}
                  titles={product.titles}
                  titlePosition={product.titlePosition}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </PageContainer>
  );
};

export default ProductPage;

const PageContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem;
  background-color: #131313;


  .img-logo-cubers{
    max-width: 250px;
  }

  .title-ice {
    color: white;
    font-size: 3rem;
    text-align: center;
    margin: 8rem 0;
  }

  .row {
    background-color: #131313;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;


    
  }

  .col-products {
    margin-bottom: 2rem;
  }

  @media (max-width: 576px) {
    .title-ice {
      font-size: 2rem;
      margin: 4rem 0;
    }

    .row {
      justify-content: space-between;
      padding-top: 1rem;
    }
  }
`;
