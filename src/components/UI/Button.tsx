/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import styled from 'styled-components';
interface IProps {
  children?: ReactNode;
  onClick?: () => void;
}
// void 임시
const Button: React.FC<IProps> = ({ children, onClick }) => {
  return <ButtonContent onClick={onClick}>{children}</ButtonContent>;
};

const ButtonContent = styled.button``;

export default Button;
