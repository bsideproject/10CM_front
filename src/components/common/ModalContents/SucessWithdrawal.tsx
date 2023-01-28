import ModalTitle from 'components/ModalContents/ModalTitle';
import Modal from 'components/UI/Modal';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import withdrawalImg from 'assets/img/withdrawalLastImg.svg';
import Img from 'components/Img/Img';
import { sizes } from 'constants/sizes';
import { fonts } from 'assets/fonts/fonts';
import ModalButton from 'components/ModalContents/ModalButton';
interface IProps {
  onClose: () => void;
}

const SuccessWithdrawal: React.FC<IProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Wrap>
        <ModalTitle headerText="회원탈퇴" onClose={onClose} />
        <ContentWrap>
          <ContentTitle>
            <span>언젠가 와있을 지도</span> 서비스의\n계정삭제가 완료되었습니다.
          </ContentTitle>
          <Img
            src={withdrawalImg}
            width={sizes.WITHDRAWAL_LAST_SIZE}
            height={sizes.WITHDRAWAL_LAST_SIZE}
          />
          <ContentLastText>{`우리, 언젠가 또 같은 곳에 와있을 지도 몰라요.\n그럼 멋진 모습으로 또 만나요 :)`}</ContentLastText>
        </ContentWrap>
        <ModalButton
          btnText="메인으로 돌아가기"
          btnSize="large"
          btnWidth="300px"
          isOne
        />
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
  background-color: ${colors.WHITE};
  box-shadow: 0px 1px 8px 4px rgba(0, 0, 0, 0.08),
    0px 1px 6px 2px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  gap: 40px;
`;

const ContentTitle = styled.span`
  ${fonts('title-lg-bold')};
  color: ${colors.NEUTRAl_900};
  letter-spacing: 0.013em;
  text-align: center;
  white-space: pre-wrap;

  > span {
    color: ${colors.BLUE_BASE};
  }
`;

const ContentLastText = styled.span`
  ${fonts('text-sm-bold')};
  text-align: center;
  letter-spacing: 0.013em;
  color: ${colors.NEUTRAl_900};
  white-space: pre-wrap;
`;

export default SuccessWithdrawal;
