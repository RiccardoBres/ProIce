import React from 'react';
import styled from 'styled-components';
import CustomTitle from '../../Atoms/CustomTitle';
import GoogleMaps from '../../Molecules/MapsMolecules/GoogleMaps';

const WhereToFindUs = () => {
  return (
    <ContainerMaps>
        <CustomTitle text='WHERE TO FIND US' className='title-maps'/>
        <GoogleMaps/>
    </ContainerMaps>
  )
}

export default WhereToFindUs

const ContainerMaps = styled.div`
  background-color: #131313;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .title-maps{
        text-align: center;
        color: white;
        font-size: 3rem;
        margin: 5rem 0;

        @media (max-width: 768px) {
                    font-size: 2rem;

  }
    }
`
