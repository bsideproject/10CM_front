import React, { ReactNode } from 'react';
import reactDom from 'react-dom';
interface IProps {
  children?: ReactNode;
}
const ModalPortal: React.FC<IProps> = ({ children }) => {
  const el = document.querySelector('#modal')!;
  // ! 혹은 as HTMLElement도 가능
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
