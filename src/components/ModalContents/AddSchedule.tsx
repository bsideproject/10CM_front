import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
interface IProps {
  isMake?: boolean;
}
const AddSchedule: React.FC<IProps> = ({ isMake }) => {
  return (
    <Wrap>
      <WrapDate>
        <WrapSchedule>
          <span>시작일*</span>
          <DatePicker type="date" />
        </WrapSchedule>
        <WrapSchedule>
          <span>종료일*</span>
          <DatePicker type="date" />
        </WrapSchedule>
      </WrapDate>
      {isMake && (
        <NoticeText>일정은 최초 설정 후 수정이 불가합니다.</NoticeText>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const WrapDate = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrapSchedule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 208px;

  > span {
    ${fonts('text-sm-bold')};
    color: ${colors.NEUTRAl_900};
    letter-spacing: 0.013em;
  }
`;

const DatePicker = styled.input`
  width: 212px;
  height: 44px;
  ${fonts('text-xs-regular')};
  color: ${colors.NEUTRAl_900};
  border: 1px solid ${colors.NEUTRAl_200};
  background-color: ${colors.WHITE};
  border-radius: 4px;
`;

const NoticeText = styled.span`
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
  letter-spacing: 0.013em;
`;
export default AddSchedule;
