/* eslint-disable react/require-default-props */
import React, { ReactNode, FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
type ButtonTypes = React.DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface IProps extends ButtonTypes {
  children?: ReactNode;
  onClick: () => void;
}
// void 임시
const Button: FC<IProps> = ({ children, onClick }) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>;
};

const CustomButton = styled.button``;

export default Button;

// import React from 'react';
// type ButtonTypes = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

// export interface ButtonProps extends ButtonTypes {
//   onClick: () => void;
//   children: React.ReactNode;
// }

// const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ onClick, className, children, ...props }, ref?: React.Ref<HTMLButtonElement>) => {

//     const classNames = [className, 'custom-btn'].filter(v => Boolean(v)).join(' ') || undefined;

//     return (
//       <button ref={ref} className={classNames} onClick={onClick} {...props}>
//         {children}
//       </button>
//     );
//   },
// );
// export default CustomButton;
