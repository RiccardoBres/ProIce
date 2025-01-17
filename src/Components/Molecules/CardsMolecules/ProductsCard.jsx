import React from 'react';
import styled from 'styled-components';

const ProductsCard = ({ imageSrc, titles, titlePosition }) => {
  return (
    <CardContainer titlePosition={titlePosition}>
      <Image src={imageSrc} alt="Product" />
      <TitlesContainer titlePosition={titlePosition}>
        {titles.map((title, index) => (
          <Title key={index}>{title}</Title>
        ))}
      </TitlesContainer>
    </CardContainer>
  );
};

export default ProductsCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.titlePosition === 'side' ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img`
  background: none;
  width: 100%;
  max-width: 150px;
  height: auto;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease, transform 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.titlePosition === 'side' ? 'column' : 'row')};
  text-align: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1rem;
  color: rgb(248, 224, 173);
`;
