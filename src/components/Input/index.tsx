import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  count?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { error = false, count = false, ...rest } = props;
  return (
    <div>
      <MyInput ref={ref} {...rest} error={!!error} placeholder="입력을" />
      {!!error && <Error>안녕하세용 저는 에러입니다</Error>}
      {count && <div>zkdnsxm</div>}
    </div>
  );
});
export default Input;

const defaultInputStyle = css`
  width: 100%;
  padding: 0 12px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  box-sizing: border-box;
  ${fonts('text-xs-regular')};
  &::placeholder {
    color: ${colors.NEUTRAl_300};
  }
  transition: 0.1s linear;
`;
const getInputBackground = (disabled?: boolean) => {
  if (disabled) {
    return css`
      background-color: ${colors.NEUTRAl_100};
    `;
  }
  return css`
    background-color: ${colors.WHITE};
  `;
};
const getInputBorder = (error: boolean) => {
  if (error) {
    return css`
      border: 1px solid ${colors.ALERT};
    `;
  }
  return css`
    border: 1px solid ${colors.NEUTRAl_200};
    &:focus {
      border: 1px solid ${colors.BLUE_BASE};
    }
  `;
};
// input 스타일
const MyInput = styled.input<{ error: boolean }>`
  ${defaultInputStyle};
  height: 44px;
  ${({ disabled }) => getInputBackground(disabled)}
  ${({ error }) => getInputBorder(error)};
`;
const Error = styled.div`
  padding: 0 12px;
  margin-top: 2px;
  ${fonts('caption')};
  color: ${colors.ALERT};
`;
