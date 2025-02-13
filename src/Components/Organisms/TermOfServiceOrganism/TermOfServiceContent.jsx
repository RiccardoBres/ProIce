import React from 'react';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import styled from 'styled-components';

const TermOfServiceContent = () => {
    return (
        <>
            <ContainerTermsOfService>
                <CustomTitle text='TERMOS DE SERVIÇO' className='mt-5' />
                <CustomParagraph text='Bem-vindo à TPROICE LDA. Estes termos e condições definem as regras e regulamentos para a utilização dos nossos serviços e produtos.' />
                <CustomTitle text='1. Condições Gerais' />
                <CustomParagraph text='Ao aceder ao nosso website e utilizar os nossos serviços, concorda em cumprir estes termos. O não cumprimento destes termos pode resultar na suspensão do seu acesso aos nossos serviços.' />
                <CustomTitle text='2. Produtos e Serviços' />
                <CustomParagraph text='A TPROICE LDA fornece produtos de gelo de alta qualidade. Reservamo-nos o direito de modificar ou descontinuar qualquer produto ou serviço sem aviso prévio. Os preços estão sujeitos a alterações a qualquer momento.' />
                <CustomTitle text='3. Pagamento e Faturação' />
                <CustomParagraph text='Todos os pagamentos devem ser efetuados de acordo com os termos acordados. O não cumprimento do pagamento pode resultar no cancelamento da sua encomenda.' />
                <CustomTitle text='4. Limitação de Responsabilidade' />
                <CustomParagraph text='A TPROICE LDA não se responsabiliza por quaisquer danos indiretos, incidentais ou consequenciais decorrentes da utilização dos nossos produtos ou serviços.' />
                <CustomTitle text='5. Lei Aplicável' />
                <CustomParagraph text='Estes termos são regidos pelas leis de Portugal. Qualquer disputa decorrente destes termos será resolvida nos tribunais de Portugal.' />
                <CustomTitle text='6. Contactos' />
                <CustomParagraph text='Para quaisquer questões ou preocupações relativas a estes termos, entre em contacto connosco.' />
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
