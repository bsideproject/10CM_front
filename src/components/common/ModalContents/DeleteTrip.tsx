import { deleteTrip } from 'apis/tripApi';
import { fonts } from 'assets/fonts/fonts';
import ModalButton from 'components/ModalContents/ModalButton';
import ModalPortal from 'components/UI/ModalPortal';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
interface IProps {
  onClose: () => void;
  tripId: number;
}
const DeleteTrip: React.FC<IProps> = ({ tripId, onClose }) => {
  const handleDeleteTrip = () => {
    deleteTrip(tripId).then(() => onClose());
    window.location.reload();
  };
  return (
    <ModalPortal>
      <ModalBackground>
        <ModalContent>
          <Wrap>
            <NoticeText>삭제한 일정은 복구가 불가능합니다.</NoticeText>
            <NoticeText>정말로 삭제하시겠습니까?</NoticeText>
            <ModalButton
              btnText="확인"
              btnSize="medium"
              btnWidth="67px"
              onClick={handleDeleteTrip}
              onClose={onClose}
            />
          </Wrap>
        </ModalContent>
      </ModalBackground>
    </ModalPortal>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 292px;
  border-radius: 4px;
  padding: 32px;
  background-color: ${colors.WHITE};

  > span:nth-child(2) {
    margin-bottom: 8px;
  }
`;

const NoticeText = styled.span`
  color: ${colors.NEUTRAl_600};
  ${fonts('text-sm-regular')};
  letter-spacing: 0.013em;
`;

export default DeleteTrip;
