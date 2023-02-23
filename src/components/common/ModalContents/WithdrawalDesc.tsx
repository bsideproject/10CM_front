import { withdrawalUser } from 'apis/userInfo';
import { fonts } from 'assets/fonts/fonts';
import ModalButton from 'components/ModalContents/ModalButton';
import ModalTitle from 'components/ModalContents/ModalTitle';
import Modal from 'components/UI/Modal';
import { colors } from 'constants/colors';
import { persistor } from 'index';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setAuthInfo, setIsLoggedIn, info } from 'store/modules/authInfo';
import styled from 'styled-components';
interface IProps {
  onClose: () => void;
  onSuccess: () => void;
}

const WithdrawalDesc: React.FC<IProps> = ({ onClose, onSuccess }) => {
  const dispatch = useDispatch();

  const handleClickWithdrawal = async () => {
    await withdrawalUser();
    const initUserInfo = info;
    localStorage.clear();
    dispatch(setAuthInfo(initUserInfo));
    dispatch(setIsLoggedIn(false));
    persistor.purge().then(() => {
      onClose();
      onSuccess();
    });
  };

  return (
    <Modal onClose={onClose}>
      <Wrap>
        <ModalTitle headerText="회원탈퇴" onClose={onClose} />
        <ContentWrap>
          <ContentTitle>
            잠깐, 정말 <span>언젠가 와있을 지도</span>를 떠나시나요?
          </ContentTitle>
          <ContentText>
            <span>{`주의하세요! 다음과 같은 정보들은\n회원 탈퇴와 즉시 삭제되며, 복구되지 않습니다.`}</span>
            <ul>
              <li>
                <SmallCircle />
                나의 장소 저장 정보
              </li>
              <li>
                <SmallCircle />
                나의 여행 저장 정보
              </li>
              <li>
                <SmallCircle />
                계정 및 프로필 정보
              </li>
            </ul>
          </ContentText>
          <ContentText>
            <span>탈퇴를 하셔도, 여전히 아래 항목들은 유지됩니다.</span>
            <ul>
              <li>
                <SmallCircle />
                링크로 공유된 여행 및 일정
              </li>
            </ul>
          </ContentText>
        </ContentWrap>
        <ContentLastText>
          정말 언젠가 와있을 지도 계정을 삭제하시겠습니까?
        </ContentLastText>
        <ModalButton
          btnText="계정 삭제"
          btnSize="large"
          btnWidth="212px"
          onClose={onClose}
          onClick={handleClickWithdrawal}
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
  padding-top: 8px;
  gap: 24px;
  height: 420px;
`;

const ContentTitle = styled.span`
  ${fonts('title-lg-bold')};
  color: ${colors.NEUTRAl_900};
  letter-spacing: 0.013em;

  > span {
    color: ${colors.BLUE_BASE};
  }
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  > span {
    white-space: pre-wrap;
    ${fonts('text-sm-regular')};
    letter-spacing: 0.013em;
    color: ${colors.NEUTRAl_600};
  }

  > ul > li {
    display: flex;
    align-items: center;
    gap: 8px;
    ${fonts('text-sm')};
    letter-spacing: 0.013em;
    color: ${colors.NEUTRAl_700};
  }
`;

const SmallCircle = styled.div`
  width: 5px;
  height: 5px;
  background: ${colors.NEUTRAl_400};
  border-radius: 50%;
`;

const ContentLastText = styled.span`
  ${fonts('text-xs-bold')};
  letter-spacing: 0.013em;
  color: ${colors.NEUTRAl_700};
`;

export default WithdrawalDesc;
