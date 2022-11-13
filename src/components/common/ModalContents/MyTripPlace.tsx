import AddImgBtn from 'components/ModalContents/AddImgBtn';
import AddInput from 'components/ModalContents/AddInput';
import AddSchedule from 'components/ModalContents/AddSchedule';
import AddTextArea from 'components/ModalContents/AddTextArea';
import ModalButton from 'components/ModalContents/ModalButton';
import ModalTitle from 'components/ModalContents/ModalTitle';
import Modal from 'components/UI/Modal';
import React from 'react';
import * as CFG from 'services/config.js';

const MyTripPlace: React.FC = () => {
  const { TRIP } = CFG.MODAL_MYPLACE;

  return (
    <Modal onClose={() => {}} bodyStyle="MY_PLACE">
      <ModalTitle headerText={TRIP.headerText} />
      <AddInput purpose="TRIP" />
      <AddSchedule />
      <AddImgBtn />
      <AddTextArea purpose="TRIP" />
      <ModalButton btnText="저장하기" btnSize="full" btnWidth="100%" />
    </Modal>
  );
};

export default MyTripPlace;
