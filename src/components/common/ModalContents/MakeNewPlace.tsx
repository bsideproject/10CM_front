import AddImgBtn from 'components/ModalContents/AddImgBtn';
import AddInput from 'components/ModalContents/AddInput';
import AddSchedule from 'components/ModalContents/AddSchedule';
import ModalButton from 'components/ModalContents/ModalButton';
import ModalTitle from 'components/ModalContents/ModalTitle';
import Modal from 'components/UI/Modal';
import React from 'react';
import * as CFG from 'services/config.js';
import { useNavigate } from 'react-router-dom';

interface IProps {
  onClose: () => void;
}
const MakeNewPlace: React.FC<IProps> = ({ onClose }) => {
  const { TRIP } = CFG.MODAL_MYPLACE;
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate('/make-my-trip');
  };

  return (
    <Modal onClose={onClose} bodyStyle="MAKE_NEW_PLACE">
      <ModalTitle headerText={TRIP.headerText} onClose={onClose} />
      <AddInput purpose="TRIP" />
      <AddSchedule isMake />
      <AddImgBtn />
      <ModalButton
        onClick={handleClickBtn}
        btnText="상세 일정 만들기"
        btnSize="full"
        btnWidth="100%"
      />
    </Modal>
  );
};

export default MakeNewPlace;
