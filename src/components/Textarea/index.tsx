import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  return <MyTextarea ref={ref} {...props} />;
});
export default Textarea;

const MyTextarea = styled.textarea`
  width: 100%;
  height: 128px;
  resize: none;
`;
