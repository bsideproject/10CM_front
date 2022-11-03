/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import ModalPortal from './ModalPortal';

interface IProps {
  children: ReactNode;
  onClose: () => void;
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
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

const ModalContent = styled.div`
  position: relative;
  margin: 0 auto;
  z-index: 1000;
  background-color: ${colors.WHITE};
  border-radius: 8px;
`;
