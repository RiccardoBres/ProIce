import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import styled from 'styled-components';
import Logo from '../../../Layout/Assets/Logotipo.png';

import 'leaflet/dist/leaflet.css';

const MapWrapper = styled.div`
  height: 50vh;  
  width: 50%;  
  @media (max-width: 768px) {
    height: 40vh;  
    width: 90%;
  }
  @media (max-width: 480px) {
    height: 30vh;  
  }
`;

const GoogleMaps = () => {
  // Coordinate dell'indirizzo
  const position = [41.375251, -8.718400]; // Coordinate precise

  // Creare un'icona personalizzata per il marker con il logo
  const customIcon = new L.Icon({
    iconUrl: 'https://static.thenounproject.com/png/654004-200.png', 
    iconSize: [50, 50], // Aumenta la dimensione dell'icona
    iconAnchor: [25, 25], // Centra l'icona (metà dell'icona)
    popupAnchor: [0, -50], // Imposta la posizione del pop-up rispetto all'icona
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Aggiungi un'ombra per l'icona
    shadowSize: [68, 95], // Definisce la dimensione dell'ombra
    shadowAnchor: [22, 94], // Posiziona l'ombra
  });

  return (
    <MapWrapper>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Rua Dona Laura Osorio 70, Vila do Conde 4480-509
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  );
};

export default GoogleMaps;
