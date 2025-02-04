import React from 'react';
import styled from 'styled-components';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import GoogleMaps from '../../Molecules/MapsMolecules/GoogleMaps';

const WhereToFindUs = () => {
  return (
    <ContainerMaps>
        <CustomTitle text='WHERE TO FIND US' className='title-maps'/>
        <GoogleMaps/>
        <ContainerInfo>
        <CustomTitle text='PROICE LDA' className='mb-5'/>
        <CustomParagraph text='Rua Dona Laura Osório, Nº 70' className='p-info'/>
        <CustomParagraph text='4480-509 Vila do Conde' className='p-info'/>
        <CustomParagraph text='Tel. +39 091 81 40 643' className='p-info'/>
        <div className="d-flex gap-2">
        <CustomParagraph text='E-mail:' className='p-info'/>
        <CustomParagraph text='proice@gmail.com' className='p-white'/>
        </div>
        </ContainerInfo>
    </ContainerMaps>
  )
}

export default WhereToFindUs

const ContainerMaps = styled.div`
  background-color: #131313;
    min-height: 150vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

     @media (max-width: 768px) {
         min-height: 100vh;

  }

    .title-maps{
        text-align: center;
        color: white;
        font-size: 3rem;
        margin-top: 10rem;
        margin-bottom: 5rem;

        @media (max-width: 768px) {
            font-size: 2rem;
            margin-top: 15rem;
  }
    }
`
const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8rem 2rem;
    align-items: center;
    justify-content: center;
    color: white;

    .p-info{
        color: #b1b1b1;
        font-size: 14px;
    }
    .p-white{
            color: white;
            font-size: 14px;
    }
`
