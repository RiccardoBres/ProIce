import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import styled from 'styled-components';

const GeneralInfo = () => {
    const aboutDescription = 'We are an Italian company operating at the forefront of packaged, food-grade ice production, sales and distribution, with a focus on innovation and sustainability. Using the most innovative food-grade ice production facility in the Mediterranean, we turn spring water from the Madonie mountains into the purest ice to bring you the high-quality ingredient that transforms drinking a cocktail into truly chilled experience.'
    const doDescription = 'We distribute pure, certified ice in Italy and abroad. Our ice is ready for consumption and undergoes stringent filtration and purification processes. We offer the guarantee of a premium product. Available in a range of sizes, our ice is ideal for professional use, practical for everyday use, and offers freshness, brightness and style for any occasion.'

  return (
    <InfoSection>
      <ContentWrapper>
        <Section>
          <CustomTitle className="info-title" text='About Us'/>
          <CustomParagraph className="info-paragraph" text={aboutDescription}/>
        </Section>
        <Section>
          <CustomTitle className="info-title" text='What We Do'/>
          <CustomParagraph className="info-paragraph" text={doDescription}/>
        </Section>
      </ContentWrapper>
    </InfoSection>
  );
};

export default GeneralInfo;

const InfoSection = styled.section`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Section = styled.div`
  margin-bottom: 2rem;

  .info-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .info-paragraph {
    font-size: 1rem;
    line-height: 1.5;
  }
`;
