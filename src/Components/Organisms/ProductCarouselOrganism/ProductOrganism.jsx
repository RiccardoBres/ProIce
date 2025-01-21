import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import CustomTitle from '../../Atoms/CustomTitle';
import Carousel from '../../Molecules/CarouselMolecules/Carousel';

const ProductOrganism = () => {
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const carouselVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.3 } },
  };

  return (
    <ProductContainer>
      <motion.div
        className="products-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CustomTitle text={'PRODUCTS'} />
      </motion.div>
      <motion.div
        className="carousel-container"
        variants={carouselVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Carousel />
      </motion.div>
    </ProductContainer>
  );
};

export default ProductOrganism;

const ProductContainer = styled.div`
  background-color: #131313;
  color: white;
  padding: 20px;
  text-align: center;
  padding-bottom: 8rem;

  @media (max-width: 576px) {
    max-height: 50vh;
    padding-bottom: 0;
  }

  .products-title {
    font-size: 2rem;
    margin-top: 1.5rem;

    @media (max-width: 576px) {
      margin-bottom: 65px;
    }
  }

  .carousel-container {
    margin-top: 2rem;
  }
`;
