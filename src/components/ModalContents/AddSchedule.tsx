import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import { sizes } from 'constants/sizes';
import DatePicker from 'components/common/DatePicker';
import calendarIcon from 'assets/img/calendarIcon.svg';
import Img from 'components/Img/Img';
import usePickerInfo from 'components/hooks/usePickerInfo';
import { convertDate } from 'services/misc';
import { isAllOf } from '@reduxjs/toolkit';
interface IProps {
  isMake: boolean;
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
          <PickerWrap onClick={setClickedStart} isMake={isMake}>
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
          <PickerWrap onClick={setClickedEnd} isMake={isMake}>
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

const getScheduleCss = (isMake: boolean) => {
  if (!isMake) {
    return css`
      color: ${colors.NEUTRAl_300};
      background-color: ${colors.NEUTRAl_50};
      pointer-events: none;
    `;
  }
  return css`
    color: ${colors.NEUTRAl_900};
    background-color: ${colors.WHITE};
  `;
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

const PickerWrap = styled.div<{ isMake: boolean }>`
  position: relative;
  width: 212px;
  height: 44px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.NEUTRAl_200};
  ${fonts('text-xs-regular')};
  color: ${colors.NEUTRAl_900};
  border: 1px solid ${colors.NEUTRAl_200};
  background-color: ${colors.WHITE};
  border-radius: 4px;
  cursor: pointer;
  ${props => getScheduleCss(props.isMake)};
  > span {
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
