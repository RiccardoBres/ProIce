import React from 'react';
import { motion } from 'framer-motion';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import styled from 'styled-components';

const GeneralInfo = () => {
  const aboutDescription =
    'We are an Italian company operating at the forefront of packaged, food-grade ice production, sales and distribution, with a focus on innovation and sustainability. Using the most innovative food-grade ice production facility in the Mediterranean, we turn spring water from the Madonie mountains into the purest ice to bring you the high-quality ingredient that transforms drinking a cocktail into truly chilled experience.';
  const doDescription =
    'We distribute pure, certified ice in Italy and abroad. Our ice is ready for consumption and undergoes stringent filtration and purification processes. We offer the guarantee of a premium product. Available in a range of sizes, our ice is ideal for professional use, practical for everyday use, and offers freshness, brightness and style for any occasion.';

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <InfoSection>
      <ContentWrapper>
        <Section>
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <CustomTitle className="info-title" text="About Us" />
          </motion.div>
          <motion.div
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <CustomParagraph className="info-paragraph" text={aboutDescription} />
          </motion.div>
        </Section>
        <Section>
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <CustomTitle className="info-title" text="What We Do" />
          </motion.div>
          <motion.div
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <CustomParagraph className="info-paragraph" text={doDescription} />
          </motion.div>
        </Section>
      </ContentWrapper>
    </InfoSection>
  );
};

export default GeneralInfo;

const InfoSection = styled.section`
  background-color: #131313;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 700px;
  margin-top: 150px;
`;

const Section = styled.div`
  margin-bottom: 2rem;

  .info-title {
    font-size: 2rem;
    margin: 50px 0;
  }

  .info-paragraph {
    font-size: 14px;
    line-height: 25px;
    color: #b1b1b1;
  }
`;
