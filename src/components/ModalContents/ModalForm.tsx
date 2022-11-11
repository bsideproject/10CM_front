import Modal from 'components/UI/Modal';
import React from 'react';
import styled from 'styled-components';
import * as CFG from 'services/config.js';
import TripSummary from 'components/MyTrip/TripSummary';
import MyPlaceContainer from 'components/UI/MyPlaceContainer';
import AddImgBtn from './AddImgBtn';
import AddTextArea from './AddTextArea';
import ModalButton from './ModalButton';
import ModalTitle from './ModalTitle';
import SearchLocation from './SearchLocation';
import AddInput from './AddInput';
import DeletePlaceContainer from './DeletePlaceContainer';
import AddSchedule from './AddSchedule';
import LeavePageParagraph from './LeavePageParagraph';
import LeaveBtn from './LeaveBtn';

const ModalForm: React.FC = () => {
  const { ADD, UPDATE, DELETE, TRIP, PLACE_DETAIL } = CFG.MODAL_MYPLACE;
  const addPlace = (
    <Modal onClose={() => {}} bodyStyle="ADD_UPDATE_PLACE">
      <ModalTitle headerText={ADD.headerText} />
      <OverFlowWrap>
        <SearchLocation />
        <AddImgBtn />
        <AddInput purpose="TAG" />
        <AddTextArea purpose="TAG" />
      </OverFlowWrap>
      <ModalButton btnText={ADD.btnText} btnSize="large" btnWidth="212px" />
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
      <ModalButton btnText={UPDATE.btnText} btnSize="large" btnWidth="212px" />
    </Modal>
  );

  const deletePlace = (
    <Modal onClose={() => {}} bodyStyle="DELETE_PLACE">
      <DeletePlaceContainer headerText={DELETE.headerText} />
      <ModalButton btnText={DELETE.btnText} btnSize="medium" btnWidth="76px" />
    </Modal>
  );

  const makeNewPlace = (
    <Modal onClose={() => {}} bodyStyle="MAKE_NEW_PLACE">
      <ModalTitle headerText={TRIP.headerText} />
      <AddInput purpose="TRIP" />
      <AddSchedule isMake />
      <AddImgBtn />
      <ModalButton btnText="상세 일정 만들기" btnSize="full" btnWidth="100%" />
    </Modal>
  );

  const myTripPlace = (
    <Modal onClose={() => {}} bodyStyle="MY_PLACE">
      <ModalTitle headerText={TRIP.headerText} />
      <AddInput purpose="TRIP" />
      <AddSchedule />
      <AddImgBtn />
      <AddTextArea purpose="TRIP" />
      <ModalButton btnText="저장하기" btnSize="full" btnWidth="100%" />
    </Modal>
  );

  const leavePage = (
    <Modal onClose={() => {}} bodyStyle="LEAVE_PAGE">
      <LeavePageParagraph />
      <LeaveBtn />
    </Modal>
  );

  const myPlaceDetail = (
    <Modal onClose={() => {}} bodyStyle="MY_PLACE_DETAIL">
      <SummaryWrap>
        <ModalTitle headerText={PLACE_DETAIL.headerText} />
        <TripSummary />
      </SummaryWrap>
      <MyPlaceContainer />
    </Modal>
  );
  // Todo: 레이아웃 재구성 필요
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

const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-self: flex-start;
  width: 100%;
  gap: 24px;
`;

export default ModalForm;
