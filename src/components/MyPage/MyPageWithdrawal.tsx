import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as RightIcon } from 'assets/svg/arrow-right-circle.svg';
import { fonts } from 'assets/fonts/fonts';

interface Props {}

const MyPageWithdrawal: React.FC<Props> = () => {
  return (
    <MyPageWithdrawalWrap>
      <MyPageWithdrawalButton>
        <MyPageWithdrawalText>회원탈퇴</MyPageWithdrawalText>
        <RightIcon />
      </MyPageWithdrawalButton>
    </MyPageWithdrawalWrap>
  );
};
export default MyPageWithdrawal;

const MyPageWithdrawalWrap = styled.div`
  margin-top: 24px;
  padding: 40px;
  border: 1px solid ${colors.NEUTRAl_100};
  border-radius: 12px;
`;
const MyPageWithdrawalText = styled.div`
  ${fonts('text-sm-bold')};
`;
const MyPageWithdrawalButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;
