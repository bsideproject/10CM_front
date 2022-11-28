import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';

type ButtonType = 'filled' | 'outline';
type ButtonSize = 'large' | 'medium' | 'small';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  buttonWidth: string;
  // onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <MyButton ref={ref} onClick={props.onClick} {...props}>
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

const getButtonSize = (width: string, size: ButtonSize = 'medium') => {
  // Todo : width 정리
  switch (size) {
    case 'large':
      return css`
        height: 56px;
        // padding: 0 24px;
        width: ${width};
      `;

    case 'medium':
      return css`
        height: 48px;
        // padding: 0 24px;
        width: ${width};
      `;

    case 'small':
      return css`
        height: 36px;
        // padding: 0 20px;
        width: ${width};
      `;
    default:
      return css`
        height: 48px;
        // padding: 0 24px;
      `;
  }
};
const defaultButtonStyle = css`
  border-radius: 4px;
  border: 0;
  outline: 0;
  transition: 0.1s;
  box-sizing: border-box;
  cursor: pointer;
`;
// button 스타일
const MyButton = styled.button<{
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  buttonWidth: string;
}>`
  ${defaultButtonStyle};
  ${({ buttonType, disabled }) => getButtonStyle(disabled, buttonType)};
  ${({ buttonWidth, buttonSize }) => getButtonSize(buttonWidth, buttonSize)}
`;
