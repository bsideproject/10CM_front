import React, {
  ReactNode,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
  FC,
} from 'react';

import styled from 'styled-components';

export type InputType = 'text';
interface IProps {
  id: string;
  name: string;
  type?: InputType;
  className?: string;
}

const Input: FC<IProps> = forwardRef<HTMLInputElement, IProps>(
  ({ id, name, type = 'text', className = '' }, ref) => {
    return <InputContent id={id} name={name} type={type} />;
  },
);

const InputContent = styled.input``;

export default Input;

// default props off
