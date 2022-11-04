import Modal from 'components/UI/Modal';
import React from 'react';
import styled from 'styled-components';
import * as CFG from 'services/config.js';
import AddImgBtn from './AddImgBtn';
import MemoText from './MemoText';
import ModalButton from './ModalButton';
import ModalTitle from './ModalTitle';
import SearchLocation from './SearchLocation';
import TagInput from './TagInput';
import DeletePlaceContainer from './DeletePlaceContainer';

const ModalForm: React.FC = () => {
  const { ADD, UPDATE, DELETE, TRIP } = CFG.MODAL_MYPLACE;
  const addUpdatePlace = (
    <Modal onClose={() => {}} bodyStyle="ADD_UPDATE_PLACE">
      <ModalTitle headerText={ADD.headerText} />
      <OverFlowWrap>
        <SearchLocation />
        <AddImgBtn />
        <TagInput />
        <MemoText />
      </OverFlowWrap>
      <ModalButton btnText={ADD.btnText} btnSize="large" />
    </Modal>
  );

  const deletePlace = (
    <Modal onClose={() => {}} bodyStyle="DELETE_PLACE">
      <DeletePlaceContainer headerText={DELETE.headerText} />
      <ModalButton btnText={DELETE.btnText} btnSize="medium" />
    </Modal>
  );
  return addUpdatePlace;
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

export default ModalForm;
