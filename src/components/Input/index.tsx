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
      <MyInput ref={ref} {...rest} placeholder="입력을" />
      {error && <div>error</div>}
      {count && <div>zkdnsxm</div>}
    </div>
  );
});
export default Input;

const defaultInputStyle = css`
  width: 100%;
  border: 0;
  outline: 0;
  border-radius: 4px;
  padding: 0 12px;
  ${fonts('text-xs-regular')};
  &::placeholder {
    color: ${colors.NEUTRAl_300};
  }
`;
const MyInput = styled.input<{}>`
  ${defaultInputStyle};
  height: 44px;
  border: 1px solid ${colors.NEUTRAl_200};
  box-sizing: border-box;
  ${({ disabled }) => getInputStyle(disabled)}
  &:focus {
    border: 1px solid ${colors.BLUE_BASE};
  }
`;
const getInputStyle = (disabled?: boolean) => {
  if (disabled) {
    return css`
      background-color: ${colors.NEUTRAl_100};
    `;
  }
  return css`
    background-color: ${colors.WHITE};
  `;
};
