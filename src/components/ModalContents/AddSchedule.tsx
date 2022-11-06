import React from 'react';
import styled from 'styled-components';

const AddSchedule: React.FC = () => {
  return (
    <Wrap>
      <WrapDate>
        <span>시작일*</span>
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

const NoticeText = styled.span``;
export default AddSchedule;
