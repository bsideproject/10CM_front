/* eslint-disable react/require-default-props */
import React, { ReactNode, MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'constants/colors';
import ModalPortal from './ModalPortal';

interface IProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<IProps> = ({ children, onClose }) => {
  const handleClickInnerModal = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalPortal>
      <ModalBackground onClick={onClose}>
        <ModalContent onClick={handleClickInnerModal}>{children}</ModalContent>
      </ModalBackground>
    </ModalPortal>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
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
// fix: 스크롤 부분에서 문제가 있으므로 position:fixed로 변경
