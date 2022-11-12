import React from 'react';
import DatePick from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import { ReactComponent as RightIcon } from 'assets/svg/go.svg';
import { ReactComponent as LeftIcon } from 'assets/svg/arrow-left.svg';

interface Props {
  onChange?: (e: Date | null) => void;
  date?: Date;
  metropolitanAreas?: Date[];
  excludeDates?: Date[];
  ableDate?: Date[];
}

const DatePicker: React.FC<Props> = ({
  onChange = () => {},
  date,
  metropolitanAreas = [],
  ableDate = [],
}) => {
  return (
    <DateWrap>
      <DatePick
        open
        inline
        locale={ko}
        minDate={ableDate?.[0]}
        selected={date}
        onChange={onChange}
        monthsShown={1}
        highlightDates={metropolitanAreas}
        // includeDates={ableDate.map(date => new Date(date))}
        showPopperArrow={false}
        showPreviousMonths={false}
        focusSelectedMonth={false}
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => {
          console.log('customHeaderCount', customHeaderCount);
          return (
            <Header>
              <PrevButton onClick={decreaseMonth} />
              <Month>{dayjs(monthDate).format('YYYY.MM')}월</Month>
              <NextButton onClick={increaseMonth} />
            </Header>
          );
        }}
        disabledKeyboardNavigation
      />
    </DateWrap>
  );
};
export default DatePicker;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  ${fonts('text-sm-regular')};
`;
const PrevButton = styled(LeftIcon)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const NextButton = styled(RightIcon)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const Month = styled.span`
  ${fonts('title-md-bold')};
  color: ${colors.NEUTRAl_900};
`;
const DateWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > div {
    width: 100%;
  }
  .react-datepicker {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: center;
    ${fonts('caption')};
  }
  .react-datepicker__month {
    margin: 0;
  }
  .react-datepicker__month-container {
    width: 280px;
  }
  .react-datepicker__week {
    display: flex;
    ${fonts('caption')};
  }
  .react-datepicker__day-name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    margin: 0;
  }
  .react-datepicker__day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    margin: 0;
    color: ${colors.NEUTRAl_900};
    &:hover {
      box-shadow: 0px 0px 0px 1px ${colors.BLUE_BASE} inset;
      background-color: transparent;
    }
  }
  .react-datepicker__day--disabled {
    color: ${colors.NEUTRAl_200};
  }
  .react-datepicker__day-names > div:nth-child(1) {
    color: ${colors.ALERT};
  }
  .react-datepicker__day-names > div:last-child {
    color: ${colors.ALERT};
  }
  .react-datepicker__day--weekend {
    color: ${colors.ALERT};
  }
  .react-datepicker__header {
    background-color: ${colors.WHITE};
    border: 0;
  }
  .react-datepicker {
    border: 0;
  }
  .react-datepicker__day--highlighted {
    position: relative;
    background-color: ${colors.BLUE_BASE};
  }
  .react-datepicker__day--outside-month {
    visibility: hidden;
  }
  .react-datepicker__day--today {
    position: relative;
    ${fonts('text-sm')};
    &::after {
      content: '';
      height: 4px;
      width: 4px;
      border-radius: 50%;
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${colors.BLUE_BASE};
    }
  }
  .react-datepicker__day--selected {
    background-color: ${colors.BLUE_BASE};
    color: ${colors.NEUTRAl_100};
    &:hover {
      background-color: ${colors.BLUE_BASE};
    }
  }

  .react-datepicker__day--highlighted::after {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 50%;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colors.BLUE_BASE};
  }
`;
