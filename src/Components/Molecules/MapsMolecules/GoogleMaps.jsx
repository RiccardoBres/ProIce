import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import styled from 'styled-components';
import Logo from '../../../Layout/Assets/Logotipo.png'; // Assicurati che il percorso sia corretto

// Importare i CSS di Leaflet
import 'leaflet/dist/leaflet.css';

const MapWrapper = styled.div`
  height: 50vh;  // Imposta l'altezza della mappa come metà della finestra
  width: 50%;   // Imposta la larghezza della mappa al 100% del contenitore
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
  const position = [41.374330, -8.290144]; // Coordinate precise

  // Creare un'icona personalizzata per il marker con il logo
  const customIcon = new L.Icon({
    iconUrl: Logo, // Usa l'immagine del logo
    iconSize: [100, 100], // Aumenta la dimensione dell'icona
    iconAnchor: [50, 50], // Centra l'icona (metà dell'icona)
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
        {/* Usa l'icona personalizzata per il Marker */}
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
