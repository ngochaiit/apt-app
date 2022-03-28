import React from 'react';
import styled from 'styled-components'

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  cursor: pointer;  
`;

const ModalBox = styled.div`
  position: relative;
  width: 80%;
  margin: 0 10%;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  cursor: auto;
`;

const ModalTitle = styled.div`
  font-size: 30px;
`;

const ModalContent = styled.div`
  margin-top: 30px; 
`;


const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  }

  return isOpen ? (
    <ModalContainer >
      <ModalOverlay
        ref={outsideRef}
        onClick={handleCloseOnOverlay}
      />
      <ModalBox>
        <ModalTitle >
          {title}
        </ModalTitle>
        <ModalContent >
          { children }
        </ModalContent>
      </ModalBox>
    </ModalContainer>
  ) : null;
};

export default Modal;