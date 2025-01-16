import React from 'react';
import styled from 'styled-components';
import CustomTitle from '../../Atoms/CustomTitle';

const OffCanvas = ({ isOpen, onClose }) => {
    const titles = ['Home', 'Company', 'WhyProIce', 'Products', 'Where'];


  return (
    <CanvasWrapper isOpen={isOpen}>
      <CanvasHeader>
        <CloseButton onClick={onClose}>✕</CloseButton>
      </CanvasHeader>
      <CanvasContent>
        {titles.map((title, index) => (
          <CustomTitle
            key={index}
            className="canvas-title"
            text={title}
            onClick={onClose}
          />
        ))}
      </CanvasContent>
    </CanvasWrapper>
  );
};

export default OffCanvas;

const CanvasWrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 70%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 1050;
  transition: right 0.3s ease;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.5);
`;

const CanvasHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const CanvasContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .canvas-title {
    font-size: 1.5rem;
    margin: 1rem 0;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: rgb(70, 128, 136);
    }
  }
`;
