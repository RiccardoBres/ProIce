import React from 'react';
import styled from 'styled-components';
import CustomTitle from '../../Atoms/CustomTitle';
import Carousel from '../../Molecules/CarouselMolecules/Carousel';
import CarouselImage1 from '../../../Layout/Assets/CarouselProducts/Carousel1.jpeg';
import CarouselImage2 from '../../../Layout/Assets/CarouselProducts/Carousel2.jpeg';
import CarouselImage3 from '../../../Layout/Assets/CarouselProducts/Carousel3.jpeg';



const images = [
    { url: CarouselImage1, description: 'Descrizione immagine 1' },
    { url: CarouselImage2, description: 'Descrizione immagine 2' },
    { url: CarouselImage3, description: 'Descrizione immagine 3' },
];

const ProductOrganism = () => {
    return (
        <ProductContainer>
            <CustomTitle text={'PRODUCTS'} className='products-title'/>
            <Carousel/>
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

  @media(max-width: 576px) {
    max-height: 50vh;
      padding-bottom: 0;
  }

  .products-title{
    font-size: 2rem;
    margin-top: 1.5rem;

     @media(max-width: 576px) {
      margin-bottom: 65px;
  }
  }

`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;