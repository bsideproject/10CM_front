import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import { sizes } from 'constants/sizes';
import DatePicker from 'components/common/DatePicker';
import calendarIcon from 'assets/img/calendarIcon.svg';
import Img from 'components/Img/Img';
import usePickerInfo from 'components/hook/usePickerInfo';
import { convertDate } from 'services/misc';
interface IProps {
  isMake?: boolean;
}
const AddSchedule: React.FC<IProps> = ({ isMake }) => {
  const [startDate, onChangeStart, clickedStart, setClickedStart] =
    usePickerInfo('start');
  const [endDate, onChangeEnd, clickedEnd, setClickedEnd] =
    usePickerInfo('end');

  const startText = convertDate(new Date(startDate), 'dot');
  const endText = convertDate(new Date(endDate), 'dot');
  return (
    <Wrap>
      <WrapDate>
        <WrapSchedule>
          <span>시작일*</span>
          <PickerWrap onClick={setClickedStart}>
            <Img
              src={calendarIcon}
              width={sizes.CALENDAR_ICON_SIZE}
              height={sizes.CALENDAR_ICON_SIZE}
            />
            <span>{startText}</span>
          </PickerWrap>
          {clickedStart && (
            <DatePicker date={new Date(startDate)} onChange={onChangeStart} />
          )}
        </WrapSchedule>
        <WrapSchedule>
          <span>종료일*</span>
          <PickerWrap onClick={setClickedEnd}>
            <Img
              src={calendarIcon}
              width={sizes.CALENDAR_ICON_SIZE}
              height={sizes.CALENDAR_ICON_SIZE}
            />
            <span>{endText}</span>
          </PickerWrap>
          {clickedEnd && (
            <DatePicker date={new Date(endDate)} onChange={onChangeEnd} />
          )}
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

const PickerWrap = styled.div`
  position: relative;
  width: 212px;
  height: 44px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  ${fonts('text-xs-regular')};
  color: ${colors.NEUTRAl_900};
  border: 1px solid ${colors.NEUTRAl_200};
  background-color: ${colors.WHITE};
  border-radius: 4px;
  cursor: pointer;

  > span {
    ${fonts('text-xs-regular')};
    color: ${colors.NEUTRAl_900};
    letter-spacing: 0.013em;
    margin-left: 10px;
  }
`;

const NoticeText = styled.span`
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
  letter-spacing: 0.013em;
`;
export default AddSchedule;
