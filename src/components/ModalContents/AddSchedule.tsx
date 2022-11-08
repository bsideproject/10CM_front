import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';

const AddSchedule: React.FC = () => {
  return (
    <Wrap>
      <WrapDate>
        <span>시작일*</span>
        <input type="date" />
      </WrapDate>
      <WrapDate>
        <span>종료일*</span>
        <input type="date" />
      </WrapDate>
      <NoticeText>일정은 최초 설정 후 수정이 불가합니다.</NoticeText>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const WrapDate = styled.div``;

const NoticeText = styled.span`
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
  letter-spacing: 0.013em;
`;
export default AddSchedule;
