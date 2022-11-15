import React, { ReactNode } from 'react';
import reactDom from 'react-dom';
interface IProps {
  children: ReactNode;
}
const ModalPortal: React.FC<IProps> = ({ children }) => {
  const el = document.querySelector('#modal')!;
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
