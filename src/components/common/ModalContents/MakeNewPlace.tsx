import AddImgBtn from 'components/ModalContents/AddImgBtn';
import AddInput from 'components/ModalContents/AddInput';
import AddSchedule from 'components/ModalContents/AddSchedule';
import ModalButton from 'components/ModalContents/ModalButton';
import ModalTitle from 'components/ModalContents/ModalTitle';
import Modal from 'components/UI/Modal';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import * as CFG from 'services/config.js';
import { useNavigate } from 'react-router-dom';
import { colors } from 'constants/colors';
import { setTitle, setFromDate, setToDate } from 'store/modules/placeInfo';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import useEnteredInfo from 'hooks/useEnteredInfo';
import { routePath } from 'constants/route';

interface IProps {
  onClose: () => void;
}

const MakeNewPlace: React.FC<IProps> = ({ onClose }) => {
  const [title, onChangeTitle] = useEnteredInfo('');
  const [file, setFile] = useState<File | undefined>();

  const { TRIP } = CFG.MODAL_MYPLACE;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { fromDate, toDate } = useAppSelect(state => state.placeInfo);

  const handleClickBtn = () => {
    if (title.length === 0) {
      return;
    }

    if (fromDate > toDate) {
      return;
    }
    dispatch(setTitle(title));
    navigate(routePath.MAKE_MY_TRIP);
  };

  return (
    <Modal onClose={onClose}>
      <Wrap>
        <ModalTitle headerText={TRIP.headerText} onClose={onClose} />
        <AddInput purpose="TRIP" title={title} onChangeTitle={onChangeTitle} />
        <AddSchedule isMake />
        <AddImgBtn file={file} setFile={setFile} />
        <ModalButton
          onClick={handleClickBtn}
          btnText="상세 일정 만들기"
          btnSize="large"
          btnWidth="100%"
          isOne
        />
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

export default MakeNewPlace;
