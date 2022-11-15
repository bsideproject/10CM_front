import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  count?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const {
    error = false,
    count = false,
    value = '',
    maxLength = 150,
    ...rest
  } = props;
  return (
    <div>
      <MyTextarea ref={ref} {...rest} error={!!error} maxLength={maxLength} />
      {(!!error || count) && (
        <OptionsWrap error={!!error}>
          <div>{error}</div>
          {count && (
            <CountWrap>
              {value.toString().length} / {maxLength}
            </CountWrap>
          )}
        </OptionsWrap>
      )}
    </div>
  );
});
export default Textarea;

const defaultTextareaStyle = css`
  display: block;
  width: 100%;
  height: 128px;
  padding: 8px 12px;
  border-radius: 4px;
  resize: none;
  box-sizing: border-box;
  ${fonts('text-xs-regular')};
  &::placeholder {
    color: ${colors.NEUTRAl_300};
  }
  transition: 0.1s linear;
`;
const getTextareaBackground = (disabled?: boolean) => {
  if (disabled) {
    return css`
      background-color: ${colors.NEUTRAl_100};
    `;
  }
  return css`
    background-color: ${colors.WHITE};
  `;
};
const getTextareaBorder = (error: boolean) => {
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
// textarea 스타일
const MyTextarea = styled.textarea<{ error: boolean }>`
  ${defaultTextareaStyle};
  ${({ disabled }) => getTextareaBackground(disabled)}
  ${({ error }) => getTextareaBorder(error)};
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

const CountWrap = styled.div`
  ${fonts('caption')};
  letter-spacing: 0.013em;
  color: ${colors.NEUTRAl_400};
`;
