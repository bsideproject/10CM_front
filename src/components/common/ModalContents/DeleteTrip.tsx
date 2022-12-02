import { fonts } from 'assets/fonts/fonts';
import ModalButton from 'components/ModalContents/ModalButton';
import Modal from 'components/UI/Modal';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const DeleteTrip = () => {
  return (
    <Modal onClose={() => {}}>
      <Wrap>
        <NoticeText>삭제한 일정은 복구가 불가능합니다.</NoticeText>
        <NoticeText>정말로 삭제하시겠습니까?</NoticeText>
        <ModalButton btnText="확인" btnSize="medium" btnWidth="67px" />
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 292px;
  border-radius: 4px;
  padding: 32px;
  gap: 8px;
  background-color: ${colors.WHITE};
`;

const NoticeText = styled.span`
  color: ${colors.NEUTRAl_600};
  ${fonts('text-sm-regular')};
  letter-spacing: 0.013em;
`;

export default DeleteTrip;
