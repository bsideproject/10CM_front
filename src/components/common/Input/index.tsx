import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  count?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    error = '',
    count = false,
    value = '',
    maxLength = 50,
    ...rest
  } = props;
  return (
    <div>
      <MyInput
        ref={ref}
        {...rest}
        error={!!error}
        maxLength={maxLength}
        value={value}
      />
      {(!!error || count) && (
        <OptionsWrap error={!!error}>
          <div>{error}</div>
          {count && (
            <div>
              {value.toString().length} / {maxLength}
            </div>
          )}
        </OptionsWrap>
      )}
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
const OptionsWrap = styled.div<{ error: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  padding: 0 12px;
  ${fonts('caption')}
  ${({ error }) =>
    error
      ? css`
          color: ${colors.ALERT};
        `
      : css`
          ${colors.NEUTRAl_400}
        `}
`;
