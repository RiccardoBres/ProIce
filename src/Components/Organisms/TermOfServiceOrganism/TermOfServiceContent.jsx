import React from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import styled from 'styled-components';

const TermOfServiceContent = () => {
    return (
        <>
            <ContainerTermsOfService>
                <CustomTitle text='TERMS OF SERVICE' className='mt-5' />
                <CustomParagraph text='Welcome to TPROICE LDA. These terms and conditions outline the rules and regulations for the use of our services and products.' />
                <CustomTitle text='1. General Conditions' />
                <CustomParagraph text='By accessing our website and using our services, you agree to comply with these terms. Failure to adhere to these terms may result in the termination of your access to our services.' />
                <CustomTitle text='2. Products and Services' />
                <CustomParagraph text='TPROICE LDA provides high-quality ice products. We reserve the right to modify or discontinue any product or service without prior notice. Prices are subject to change at any time.' />
                <CustomTitle text='3. Payment and Billing' />
                <CustomParagraph text='All payments must be made in accordance with the agreed terms. Failure to complete payment may result in the cancellation of your order.' />
                <CustomTitle text='4. Limitation of Liability' />
                <CustomParagraph text='TPROICE LDA is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services.' />
                <CustomTitle text='5. Governing Law' />
                <CustomParagraph text='These terms are governed by the laws of Portugal. Any disputes arising from these terms shall be resolved in the courts of Portugal.' />
                <CustomTitle text='6. Contact Information' />
                <CustomParagraph text='For any questions or concerns regarding these terms, please contact us at support@tproice.pt.' />
            </ContainerTermsOfService>
        </>
    );
};

export default TermOfServiceContent;

const ContainerTermsOfService = styled.div`
  min-height: 100vh;
  background-color: #131313;
  color: #ffffff;
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  h2{
    font-size: 1.5rem;
  }
    p{
             color: #b1b1b1!important;

    }

`;
