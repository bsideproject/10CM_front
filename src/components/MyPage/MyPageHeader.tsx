import { fonts } from 'assets/fonts/fonts';
import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';

interface Props {}

const MyPageHeader: React.FC<Props> = () => {
  return (
    <MyPageHeaderWrap>
      <MyPageTitle>마이페이지</MyPageTitle>
      <Button buttonWidth="104px" buttonSize="large">
        저장하기
      </Button>
    </MyPageHeaderWrap>
  );
};
export default MyPageHeader;
const MyPageHeaderWrap = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MyPageTitle = styled.h2`
  ${fonts('title-lg-bold')};
`;
