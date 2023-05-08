import Formlabel from 'components/common/Formlabel';
import Input from 'components/common/Input';
import { colors } from 'constants/colors';
import useEnteredInfo from 'hooks/useEnteredInfo';
import React, { ChangeEvent, SetStateAction } from 'react';
import styled from 'styled-components';
import { user } from 'dtos/userInfo';
import { ReactComponent as CameraIcon } from '../../assets/svg/camera.svg';
import { ReactComponent as KakaoIcon } from '../../assets/svg/kakao.svg';

interface Props {
  userInfo: user;
  setUserInfo: React.Dispatch<SetStateAction<user>>;
  setProfileImg: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MyPageForm: React.FC<Props> = ({
  userInfo,
  setUserInfo,
  setProfileImg,
}) => {
  const { nickname, profile_image_url: profileImg, email } = userInfo;
  return (
    <MyPageFormWrap>
      <form>
        <MyPageImageWrap>
          <MyPageImage src={profileImg} />
          <MyPlaceImageEditButton htmlFor="editImg">
            <CameraIcon width={12} height={12} />
            <MyPageEditImg
              type="file"
              id="editImg"
              accept=".jpg, .png .jpeg"
              onChange={setProfileImg}
            />
          </MyPlaceImageEditButton>
        </MyPageImageWrap>
        <MyPageInputWrap>
          <MyPageInputItem>
            <Formlabel label="닉네임" required>
              <Input
                placeholder="10자 이내 작성"
                maxLength={10}
                value={nickname}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setUserInfo({ ...userInfo, nickname: e.target.value });
                }}
              />
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

// TODO: 이미지 버튼 클릭 시, 사진 교환
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
const MyPlaceImageEditButton = styled.label`
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

const MyPageEditImg = styled.input`
  display: none;
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
