import Modal from 'components/UI/Modal';
import React from 'react';
import styled from 'styled-components';
import AddImgBtn from './AddImgBtn';

const ModalForm = () => {
  return (
    <Modal onClose={() => {}}>
      <AddImgBtn />
    </Modal>
  );
};

export default ModalForm;
