import React, {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLProps,
  useEffect,
} from 'react';
import styled from 'styled-components';

type ButtonType = 'primary' | 'ghost';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ buttonType, ...props }, ref) => {
    return (
      <MyButton ref={ref} buttonType={buttonType} {...props}>
        {props.children}
      </MyButton>
    );
  },
);
export default Button;

const MyButton = styled.button<{ buttonType: ButtonType }>`
  ${({ buttonType }) => buttonType};
`;
