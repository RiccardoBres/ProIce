import React from 'react';
import { motion } from 'framer-motion';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import styled from 'styled-components';

const GeneralInfo = () => {
  const aboutDescription =
  'A PRO ICE é uma empresa portuguesa com 12 anos de experiência no mercado de gelo alimentar, destacando-se pela sua inovação, diversidade, qualidade ímpar e compromisso com os clientes.' +
  ' Começamos por representar em Portugal, a marca Cubers da Procubitos Europe, o maior grupo europeu de gelo e ao longo dos anos, consolidamos essa parceria como nosso core business de vendas com especial foco no canal HORECA. ' +
  'Há 9 anos, fomos pioneiros na apresentação no mercado português do segmento Clear Ice, um tipo de produção de gelo de qualidade superior e em 2024, demos um importante passo ao iniciar a nossa produção própria, ' +
  'o que nos permite perceber as necessidades do mercado e estar em sintonia com a comunidade de bar para a sensibilização e importância deste gelo no mundo da coquetelaria e claro apoiar a nossa comunidade e tentar oferecer soluções que sustentem a sua constante evolução. ' +
  'O nosso compromisso com a excelência reflete-se em todos os aspectos da nossa operação e vai desde o processo de fabricação até à distribuição dos produtos onde dispomos de uma ampla rede de distribuição a nível nacional. ' +
  'A PRO ICE.pt é sinônimo de qualidade, inovação e confiabilidade no fornecimento de gelo para os mais diversos segmentos.';

const doDescription =
  'Na PRO ICE.pt, oferecemos gelo alimentar de alta qualidade, com uma ampla variedade de formatos e características para atender às necessidades mais exigentes do mercado. ' +
  'Trabalhamos com duas marcas de gelo distintas: Cubers e PRO ICE. ' +
  'A nossa linha Cubers, originária da Procubitos Europe, é fabricada com um processo de dupla congelação, garantindo cubos de gelo perfeitos para qualquer tipo de utilização. ' +
  'Nossos produtos incluem gelo em cubos, gelo picado e esferas de gelo, todos com uma qualidade superior para atender tanto a mercados industriais quanto a pequenas empresas e consumidores exigentes. ' +
  'A PRO ICE, nossa marca própria, é feita a partir de água ultra purificada e passa por um processo de congelação lenta, o que garante um gelo totalmente translúcido e livre de impurezas. ' +
  'Além dos tradicionais cubos e esferas, oferecemos uma diversidade de formatos exclusivos, como collins, pirâmides, abóboras, ananases, sticks, bolas de espelho e diamantes, todos concebidos para proporcionar uma experiência visual única. ' +
  'Os produtos da PRO ICE são embalados e entregues em uma embalagem de alta qualidade, que remete à sofisticação de uma caixa de joias, garantindo uma apresentação ímpar e à altura de quem busca excelência.';

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
            <CustomTitle className="info-title" text="Sobre Nós" />
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
            <CustomTitle className="info-title" text="O Que Fazemos" />
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
