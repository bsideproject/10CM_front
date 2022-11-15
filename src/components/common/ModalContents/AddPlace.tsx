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
import { colors } from 'constants/colors';
interface IProps {
  onClose: () => void;
}
const AddPlace: React.FC<IProps> = ({ onClose }) => {
  const { ADD } = CFG.MODAL_MYPLACE;

  return (
    <Modal onClose={onClose}>
      <Wrap>
        <ModalTitle headerText={ADD.headerText} />
        <OverFlowWrap>
          <SearchLocation />
          <AddImgBtn />
          <AddInput purpose="TAG" />
          <AddTextArea purpose="TAG" />
        </OverFlowWrap>
        <ModalButton btnText={ADD.btnText} btnSize="large" btnWidth="212px" />
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  border-radius: 8px;
  padding: 24px;
  gap: 24px;
  background-color: ${colors.WHITE};
`;

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

export default AddPlace;
