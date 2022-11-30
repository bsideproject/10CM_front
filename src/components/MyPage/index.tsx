import React from 'react';
import styled from 'styled-components';
import MyPageForm from './MyPageForm';
import MyPageHeader from './MyPageHeader';
import MyPageWithdrawal from './MyPageWithdrawal';

interface Props {}

const MyPage: React.FC<Props> = () => {
  const handleSaveClick = () => {
    console.log('저장');
  };

  return (
    <MyPageWrap>
      <MyPageHeader />
      <MyPageForm />
      <MyPageWithdrawal />
    </MyPageWrap>
  );
};
export default MyPage;

const MyPageWrap = styled.div`
  width: 100%;
  padding: 50px 40px;
`;
