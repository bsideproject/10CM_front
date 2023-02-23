import { colors } from 'constants/colors';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as RightIcon } from 'assets/svg/arrow-right-circle.svg';
import { fonts } from 'assets/fonts/fonts';
import WithdrawalDesc from 'components/common/ModalContents/WithdrawalDesc';
import SuccessWithdrawal from 'components/common/ModalContents/SuccessWithdrawal';

interface Props {}

const MyPageWithdrawal: React.FC<Props> = () => {
  const [onModal, setOnModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  // TODO: desc 종료 후 새로운 desc 열기

  return (
    <MyPageWithdrawalWrap>
      <MyPageWithdrawalButton onClick={() => setOnModal(!onModal)}>
        <MyPageWithdrawalText>회원탈퇴</MyPageWithdrawalText>
        <RightIcon />
      </MyPageWithdrawalButton>
      {onModal && (
        <WithdrawalDesc
          onClose={() => setOnModal(!onModal)}
          onSuccess={() => setSuccessModal(!successModal)}
        />
      )}
      {successModal && (
        <SuccessWithdrawal onClose={() => setSuccessModal(!successModal)} />
      )}
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
