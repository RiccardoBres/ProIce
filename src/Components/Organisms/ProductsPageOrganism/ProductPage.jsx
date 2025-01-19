import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import ProductsCard from '../../Molecules/CardsMolecules/ProductsCard';
import Product1 from '../../../Layout/Assets/Products/product1.png';
import Product2 from '../../../Layout/Assets/Products/product2.png';
import Product3 from '../../../Layout/Assets/Products/product3.png';
import Product4 from '../../../Layout/Assets/Products/product4.png';
import Product5 from '../../../Layout/Assets/Products/product1.png';
import CustomTitle from '../../Atoms/CustomTitle';

const ProductPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 576); // Imposta 'true' per schermi <= 576px
    };

    checkMobile(); // Verifica la larghezza alla prima renderizzazione
    window.addEventListener('resize', checkMobile); // Aggiungi listener per il ridimensionamento

    return () => {
      window.removeEventListener('resize', checkMobile); // Pulisci l'event listener
    };
  }, []);

  // I dati dei prodotti, modificati in base alla larghezza dello schermo
  const productsUltimate = [
    { imageSrc: Product1, titles: ['SPHERE 5.5', 'SPHERE 6.5'], titlePosition: isMobile ? 'row' : 'side' },
    { imageSrc: Product2, titles: ['CUBE 4x4x4', 'CUBE 5x5x5'], titlePosition: isMobile ? 'row' : 'row' },
    { imageSrc: Product3, titles: ['OLD-FASHIONED 5x5x7'], titlePosition: isMobile ? 'row' : 'side' },
    { imageSrc: Product4, titles: ['COLLINS 4x4x6', 'COLLINS 4x4x10'], titlePosition: isMobile ? 'row' : 'row' },
    { imageSrc: Product5, titles: ['EGIPCIAN 2.5', 'EGIPCIAN 3.5'], titlePosition: isMobile ? 'row' : 'row' },
  ];

  const productsSublime = [
    { imageSrc: Product1, titles: ['SPHERE 5.5', 'SPHERE 6.5'], titlePosition: 'row' },
    { imageSrc: Product2, titles: ['CUBE 4x4x4', 'CUBE 5x5x5'], titlePosition: 'row' },
    { imageSrc: Product3, titles: ['OLD-FASHIONED 5x5x7'], titlePosition: 'row' },
    { imageSrc: Product4, titles: ['COLLINS 4x4x6', 'COLLINS 4x4x10'], titlePosition: 'row' },
    { imageSrc: Product5, titles: ['EGIPCIAN 2.5', 'EGIPCIAN 3.5'], titlePosition: 'row' },
    { imageSrc: Product5, titles: ['EGIPCIAN 2.5', 'EGIPCIAN 3.5'], titlePosition: 'row' },
  ];

  return (
    <PageContainer>
      <CustomTitle text={'ULTIMATE ICE MENU'} className='title-ice' />
      <Container>
        <Row>
          {productsUltimate.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4} className="col-products">
              <ProductsCard
                imageSrc={product.imageSrc}
                titles={product.titles}
                titlePosition={product.titlePosition}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <CustomTitle text={'SUBLIME & HANDMADE'} className='title-ice' />
      <Container>
        <Row>
          {productsSublime.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-5 p-2">
              <ProductsCard
                imageSrc={product.imageSrc}
                titles={product.titles}
                titlePosition={product.titlePosition}
              />
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

  /* Media Query per dispositivi mobili */
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
