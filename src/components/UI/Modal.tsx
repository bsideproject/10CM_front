/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';

interface IProps {
  children?: ReactNode;
  onClose?: () => void;
}

const Modal: React.FC<IProps> = ({ children, onClose }) => {
  return (
    <ModalPortal>
      <ModalBackground onClick={onClose}>
        <ModalContent>{children}</ModalContent>
      </ModalBackground>
    </ModalPortal>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.55);
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
