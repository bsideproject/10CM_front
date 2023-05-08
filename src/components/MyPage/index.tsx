import React, { useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import { user } from 'dtos/userInfo';
import { getUserInfo, initUserState } from 'apis/userInfo';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useEnteredInfo from 'hooks/useEnteredInfo';
import MyPageForm from './MyPageForm';
import MyPageHeader from './MyPageHeader';
import MyPageWithdrawal from './MyPageWithdrawal';
import useUserInfo from './hooks/useUserInfo';

interface Props {}

const MyPage: React.FC<Props> = () => {
  const [userInfo, setUserInfo, setProfileImg, handleSaveClick] = useUserInfo();

  const isLoadInfo = userInfo.user_id === -1;

  return (
    <MyPageWrap>
      <MyPageHeader onClick={handleSaveClick} />
      {isLoadInfo && <LoadingSpinner />}
      {!isLoadInfo && (
        <MyPageForm
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setProfileImg={setProfileImg}
        />
      )}
      <MyPageWithdrawal />
    </MyPageWrap>
  );
};
export default MyPage;

const MyPageWrap = styled.div`
  width: 100%;
  padding: 50px 40px;
`;
