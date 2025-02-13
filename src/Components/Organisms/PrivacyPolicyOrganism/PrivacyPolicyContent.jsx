import React from 'react';
import styled from 'styled-components';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';

const PrivacyPolicyContent = () => {
    return (
        <ContainerPrivacyPolicy>
            <CustomTitle text='POLÍTICA DE PRIVACIDADE' />
            <CustomParagraph text='A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as suas informações pessoais ao utilizar os nossos serviços.' />
            <CustomTitle text='1. Informações que Coletamos' />
            <CustomParagraph text='A única informação pessoal que coletamos é o seu endereço de e-mail, que você fornece voluntariamente ao se inscrever nos nossos serviços ou ao nos contactar.' />
            <CustomTitle text='2. Como Usamos Suas Informações' />
            <CustomParagraph text='O seu endereço de e-mail é usado exclusivamente para comunicar com você sobre nossos produtos, serviços e atualizações. Não vendemos nem compartilhamos as suas informações com terceiros.' />
            <CustomTitle text='3. Segurança dos Dados' />
            <CustomParagraph text='Tomamos medidas adequadas para garantir a segurança das suas informações pessoais. No entanto, nenhum método de transmissão eletrônica ou armazenamento é 100% seguro.' />
            <CustomTitle text='4. Seus Direitos' />
            <CustomParagraph text='Você tem o direito de acessar, atualizar ou excluir as suas informações pessoais. Para isso, entre em contato conosco.' />
            <CustomTitle text='5. Alterações nesta Política' />
            <CustomParagraph text='Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. As alterações serão comunicadas por e-mail ou atualizadas em nosso site.' />
            <CustomTitle text='6. Entre em Contato' />
            <CustomParagraph text='Se tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco.' />
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
