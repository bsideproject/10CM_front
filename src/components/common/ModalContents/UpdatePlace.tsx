import Modal from 'components/UI/Modal';
import React from 'react';
import styled from 'styled-components';
import * as CFG from 'services/config.js';
import ModalTitle from 'components/ModalContents/ModalTitle';
import SearchLocation from 'components/ModalContents/SearchLocation';
import AddImgBtn from 'components/ModalContents/AddImgBtn';
import AddInput from 'components/ModalContents/AddInput';
import AddTextArea from 'components/ModalContents/AddTextArea';
import ModalButton from 'components/ModalContents/ModalButton';

const UpdatePlace: React.FC = () => {
  const { UPDATE } = CFG.MODAL_MYPLACE;

  return (
    <Modal onClose={() => {}} bodyStyle="ADD_UPDATE_PLACE">
      <ModalTitle headerText={UPDATE.headerText} />
      <OverFlowWrap>
        <SearchLocation />
        <AddImgBtn />
        <AddInput purpose="TAG" />
        <AddTextArea purpose="TAG" />
      </OverFlowWrap>
      <ModalButton btnText={UPDATE.btnText} btnSize="large" btnWidth="212px" />
    </Modal>
  );
};

const OverFlowWrap = styled.div`
  width: 100%;
  height: 462px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default UpdatePlace;
