import AddImgBtn from 'components/ModalContents/AddImgBtn';
import AddInput from 'components/ModalContents/AddInput';
import AddSchedule from 'components/ModalContents/AddSchedule';
import AddTextArea from 'components/ModalContents/AddTextArea';
import ModalButton from 'components/ModalContents/ModalButton';
import ModalTitle from 'components/ModalContents/ModalTitle';
import Modal from 'components/UI/Modal';
import React, { useState } from 'react';
import * as CFG from 'services/config.js';
import styled from 'styled-components';
import { colors } from 'constants/colors';

const MyTripPlace: React.FC = () => {
  const { TRIP } = CFG.MODAL_MYPLACE;
  const [file, setFile] = useState<File | undefined>();

  return (
    <Modal onClose={() => {}}>
      <Wrap>
        <ModalTitle headerText={TRIP.headerText} />
        <AddInput purpose="TRIP" />
        <AddSchedule />
        <AddImgBtn file={file} setFile={setFile} />
        <AddTextArea purpose="TRIP" />
        <ModalButton btnText="저장하기" btnSize="large" btnWidth="100%" isOne />
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  border-radius: 8px;
  padding: 32px 24px;
  gap: 20px;
  background-color: ${colors.WHITE};
`;

export default MyTripPlace;
