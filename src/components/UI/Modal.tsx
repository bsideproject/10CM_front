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
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.55);
  width: 100%;
  height: 100vh;
`;

const ModalContent = styled.div`
  position: relative;
`;
