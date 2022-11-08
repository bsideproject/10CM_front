import Modal from 'components/UI/Modal';
import React from 'react';
import styled from 'styled-components';
import * as CFG from 'services/config.js';
import AddImgBtn from './AddImgBtn';
import AddTextArea from './AddTextArea';
import ModalButton from './ModalButton';
import ModalTitle from './ModalTitle';
import SearchLocation from './SearchLocation';
import AddInput from './AddInput';
import DeletePlaceContainer from './DeletePlaceContainer';

const ModalForm: React.FC = () => {
  const { ADD, UPDATE, DELETE, TRIP } = CFG.MODAL_MYPLACE;
  const addPlace = (
    <Modal onClose={() => {}} bodyStyle="ADD_UPDATE_PLACE">
      <ModalTitle headerText={ADD.headerText} />
      <OverFlowWrap>
        <SearchLocation />
        <AddImgBtn />
        <AddInput purpose="TAG" />
        <AddTextArea purpose="TAG" />
      </OverFlowWrap>
      <ModalButton btnText={ADD.btnText} btnSize="large" />
    </Modal>
  );

  const updatePlace = (
    <Modal onClose={() => {}} bodyStyle="ADD_UPDATE_PLACE">
      <ModalTitle headerText={UPDATE.headerText} />
      <OverFlowWrap>
        <SearchLocation />
        <AddImgBtn />
        <AddInput purpose="TAG" />
        <AddTextArea purpose="TAG" />
      </OverFlowWrap>
      <ModalButton btnText={UPDATE.btnText} btnSize="large" />
    </Modal>
  );

  const deletePlace = (
    <Modal onClose={() => {}} bodyStyle="DELETE_PLACE">
      <DeletePlaceContainer headerText={DELETE.headerText} />
      <ModalButton btnText={DELETE.btnText} btnSize="medium" />
    </Modal>
  );

  const myTripPlace = (
    <Modal onClose={() => {}} bodyStyle="MY_PLACE">
      <ModalTitle headerText={TRIP.headerText} />
      <AddInput purpose="TRIP" />
      <AddImgBtn />
      <AddTextArea purpose="TRIP" />
      <ModalButton btnText="저장하기" btnSize="full" />
    </Modal>
  );

  const makeNewPlace = (
    <Modal onClose={() => {}} bodyStyle="MAKE_NEW_PLACE">
      <ModalTitle headerText={TRIP.headerText} />
      <AddInput purpose="TRIP" />
      <AddImgBtn />
      <ModalButton btnText="상세 일정 만들기" btnSize="full" />
    </Modal>
  );
  return myTripPlace;
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
