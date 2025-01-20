import React from 'react';
import styled from 'styled-components';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';

const PrivacyPolicyContent = () => {
    return (
        <ContainerPrivacyPolicy>
            <CustomTitle text='PRIVACY POLICY' />
            <CustomParagraph text='Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.' />
            <CustomTitle text='1. Information We Collect' />
            <CustomParagraph text='The only personal information we collect is your email address, which you provide voluntarily when subscribing to our services or contacting us.' />
            <CustomTitle text='2. How We Use Your Information' />
            <CustomParagraph text='Your email address is used solely to communicate with you regarding our products, services, and updates. We do not sell or share your information with third parties.' />
            <CustomTitle text='3. Data Security' />
            <CustomParagraph text='We take appropriate measures to ensure the security of your personal information. However, no method of electronic transmission or storage is 100% secure.' />
            <CustomTitle text='4. Your Rights' />
            <CustomParagraph text='You have the right to access, update, or delete your personal information. To do so, please contact us at privacy@tproice.pt.' />
            <CustomTitle text='5. Changes to This Policy' />
            <CustomParagraph text='We reserve the right to update this Privacy Policy at any time. Changes will be communicated via email or updated on our website.' />
            <CustomTitle text='6. Contact Us' />
            <CustomParagraph text='If you have any questions about this Privacy Policy, please contact us at privacy@tproice.pt.' />
        </ContainerPrivacyPolicy>
    );
};

export default PrivacyPolicyContent;

const ContainerPrivacyPolicy = styled.div`
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
