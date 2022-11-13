/* eslint-disable react/require-default-props */
import React, { ReactNode, MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'constants/colors';
import { modalCss } from 'assets/modalcss';
import ModalPortal from './ModalPortal';

interface IProps {
  children: ReactNode;
  bodyStyle: string;
  onClose: () => void;
}

const Modal: React.FC<IProps> = ({ children, onClose, bodyStyle }) => {
  const handleClickInnerModal = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalPortal>
      <ModalBackground onClick={onClose}>
        <ModalBody styleType={bodyStyle} onClick={handleClickInnerModal}>
          {children}
        </ModalBody>
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
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

const ModalBody = styled.div<{ styleType: string }>`
  position: relative;
  margin: 0 auto;
  top: 10%;
  z-index: 1000;
  background-color: ${colors.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => modalCss(props.styleType)};
`;
