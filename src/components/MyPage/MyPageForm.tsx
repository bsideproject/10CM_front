import Formlabel from 'components/common/Formlabel';
import Input from 'components/common/Input';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CameraIcon } from '../../assets/svg/camera.svg';
import { ReactComponent as KakaoIcon } from '../../assets/svg/kakao.svg';

interface Props {
  email: string;
  nickname: string;
  profileImg: string;
}

const MyPageForm: React.FC<Props> = ({ email, nickname, profileImg }) => {
  return (
    <MyPageFormWrap>
      <form>
        <MyPageImageWrap>
          <MyPageImage src={profileImg} />
          <MyPlaceImageEditButton>
            <CameraIcon width={12} height={12} />
          </MyPlaceImageEditButton>
        </MyPageImageWrap>
        <MyPageInputWrap>
          <MyPageInputItem>
            <Formlabel label="닉네임" required>
              <Input placeholder="10자 이내 작성" />
            </Formlabel>
          </MyPageInputItem>
          <MyPageInputItem>
            <Formlabel label="이메일" required>
              <MyPageEmail>
                <KakaoWrap>
                  <KakaoIcon />
                </KakaoWrap>
                <div>{email}</div>
              </MyPageEmail>
            </Formlabel>
          </MyPageInputItem>
        </MyPageInputWrap>
      </form>
    </MyPageFormWrap>
  );
};
export default MyPageForm;

const MyPageFormWrap = styled.div`
  margin-top: 24px;
  border: 1px solid ${colors.NEUTRAl_100};
  border-radius: 12px;
  padding: 40px;
`;
const MyPageImageWrap = styled.div`
  display: inline-block;
  position: relative;
`;
const MyPageImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 50%;
`;
const MyPlaceImageEditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
`;
const MyPageInputWrap = styled.div`
  margin-top: 40px;
`;
const MyPageInputItem = styled.div`
  & + & {
    margin-top: 27px;
  }
`;
const MyPageEmail = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 12px;
  border-radius: 4px;
  background-color: ${colors.NEUTRAl_100};
  gap: 0 12px;
`;
const KakaoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #fbe34d;
  border-radius: 4px;
`;
