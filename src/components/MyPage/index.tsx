import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { user } from 'dtos/userInfo';
import { getUserInfo, initUserState } from 'apis/userInfo';
import MyPageForm from './MyPageForm';
import MyPageHeader from './MyPageHeader';
import MyPageWithdrawal from './MyPageWithdrawal';

interface Props {}

const MyPage: React.FC<Props> = () => {
  const [userInfo, setUserInfo] = useState<user>(initUserState);
  const handleSaveClick = () => {
    // 닉네임 중복 or
    // 이미지 수정
    // 에러 체크 후 저장
    console.log('저장');
  };

  useEffect(() => {
    const getToken = localStorage.getItem('accessToken');
    getUserInfo(getToken!).then(res => setUserInfo(res));
  }, []);
  const { email, nickname, profile_image_url: profileImg } = userInfo;

  return (
    <MyPageWrap>
      <MyPageHeader />
      <MyPageForm email={email} nickname={nickname} profileImg={profileImg} />
      <MyPageWithdrawal />
    </MyPageWrap>
  );
};
export default MyPage;

const MyPageWrap = styled.div`
  width: 100%;
  padding: 50px 40px;
`;
