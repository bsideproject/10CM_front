import React, {
  ReactNode,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
  FC,
} from 'react';

import styled from 'styled-components';

export type InputType = 'text';
interface IProps extends React.HTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, IProps>((props, ref) => {
  return <InputContent ref={ref} {...props} />;
});

export default Input;

const InputContent = styled.input``;

// default props off

// const Input: FC<IProps> = forwardRef<HTMLInputElement, IProps>(
//   ({ id, name, type = 'text', className = '' }, ref) => {
//     return <InputContent id={id} name={name} type={type} />;
//   },
// );
