import { fonts } from 'assets/fonts/fonts';
import Img from 'components/Img/Img';
import ModalTitle from 'components/ModalContents/ModalTitle';
import Modal from 'components/UI/Modal';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import loginModalImg from 'assets/img/loginModalImg.png';
import kakaoLoginImg from 'assets/img/kakaoLoginImg.svg';

interface IProps {
  onClose: () => void;
}
const Login: React.FC<IProps> = ({ onClose }) => {
  const handleClickLogin = () => {
    window.location.href = 'https://unzido.site/oauth2/authorization/kakao';
  };
  // 토큰 받기
  // callback에서 토큰 받으면, 적용하고 리다이렉트

  return (
    <Modal onClose={onClose}>
      <Wrap>
        <ModalTitle headerText="로그인" onClose={onClose} />
        <ContentWrap>
          <ContentTitle>카카오로 빠르게 시작하기</ContentTitle>
          <Img src={loginModalImg} width="290px" height="240px" />
          <ContentTextWrap>
            <span>
              <span>언젠가 와있을 지도</span>에서 우리동네 SNS핫플을
            </span>
            <span>기록하고 저장한 장소들로 짧은 여행을 계획해보세요!</span>
          </ContentTextWrap>
          <Img
            src={kakaoLoginImg}
            width="300px"
            height="45px"
            onClick={handleClickLogin}
          />
        </ContentWrap>
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
  background: ${colors.WHITE};
  box-shadow: 0px 1px 8px 4px rgba(0, 0, 0, 0.08),
    0px 1px 6px 2px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  align-items: center;
`;

const ContentWrap = styled.div`
  padding-top: 32px;
  padding-bottom: 59px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ContentTitle = styled.span`
  ${fonts('title-lg-bold')};
  color: #11100d;
`;

const ContentTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  ${fonts('text-sm-bold')};
  > span > span {
    color: ${colors.BLUE_BASE};
  }
  padding-bottom: 24px;
`;

export default Login;
