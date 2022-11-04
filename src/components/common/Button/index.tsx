import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';

import React, {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLProps,
  useEffect,
} from 'react';
import styled, { css } from 'styled-components';

type ButtonType = 'filled' | 'outline';
type ButtonSize = 'large' | 'medium' | 'small';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <MyButton ref={ref} disabled {...props}>
      {props.children}
    </MyButton>
  );
});
export default Button;

const getButtonStyle = (disabled?: boolean, type: ButtonType = 'filled') => {
  if (type === 'filled') {
    if (disabled) {
      return css`
        background-color: ${colors.NEUTRAl_200};
        color: ${colors.WHITE};
      `;
    }
    return css`
      background-color: ${colors.BLUE_BASE};
      color: ${colors.WHITE};
      border: 1px solid ${colors.BLUE_BASE};
      &:hover {
        background-color: ${colors.BLUE_LIGHT};
        border: 1px solid ${colors.BLUE_LIGHT};
      }
      &:active {
        background-color: ${colors.BLUE_DARK};
        border: 1px solid ${colors.BLUE_DARK};
      }
    `;
  }
  // filled가 아니고 disabled 이면
  if (disabled) {
    console.log('good');

    return css`
      border: 1px solid ${colors.NEUTRAl_200};
      background-color: ${colors.WHITE};
      color: ${colors.NEUTRAl_300};
    `;
  }
  // filled가 아니고 disabled가 아니면
  return css`
    border: 1px solid ${colors.NEUTRAl_200};
    background-color: ${colors.WHITE};
    color: ${colors.BLUE_BASE};
    &:hover {
      background-color: ${colors.NEUTRAl_50};
      color: ${colors.BLUE_LIGHT};
    }
    &:active {
      background-color: ${colors.NEUTRAl_50};
      color: ${colors.BLUE_DARK};
    }
  `;
};

const getButtonSize = (size: ButtonSize = 'medium') => {
  // Todo : width 정리
  switch (size) {
    case 'large':
      return css`
        height: 56px;
        padding: 0 24px;
        width: 212px;
      `;

    case 'medium':
      return css`
        height: 48px;
        padding: 0 24px;
        width: 76px;
      `;

    case 'small':
      return css`
        height: 36px;
        padding: 0 20px;
      `;
    default:
      return css`
        height: 48px;
        padding: 0 24px;
      `;
  }
};
const defaultButtonStyle = css`
  border-radius: 4px;
  border: 0;
  outline: 0;
  transition: 0.1s;
  ${fonts('text-sm-bold')};
  box-sizing: border-box;
  cursor: pointer;
`;
// button 스타일
const MyButton = styled.button<{
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
}>`
  ${defaultButtonStyle};
  ${({ buttonType, disabled }) => getButtonStyle(disabled, buttonType)};
  ${({ buttonSize }) => getButtonSize(buttonSize)}
`;
