import React from 'react';
import ContactForm from '../../Molecules/FormMolecules/ContactForm';
import styled from 'styled-components';

const FormSection = () => {
  return (
    <SectionWrapper>
      <ContactForm />
    </SectionWrapper>
  );
};

export default FormSection;

const SectionWrapper = styled.section`
  background-color: #131313;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 ;

  @media (max-width: 576px) {
     padding-bottom: 15rem;
  }
`;
