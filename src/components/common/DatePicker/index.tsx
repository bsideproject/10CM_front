import React, { forwardRef } from 'react';
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
  onChange?: (e: Date) => void;
  date?: Date;
  metropolitanAreas?: Date[];
  // excludeDates?: Date[];
  // ableDate?: Date;
}

const CustomInput = forwardRef((props: any, ref) => {
  return <input {...props} ref={ref} />;
});

const DatePicker: React.FC<Props> = ({
  onChange = () => {},
  date,
  metropolitanAreas = [],
  // ableDate = [],
}) => {
  return (
    <DateWrap>
      <DatePick
        open
        inline
        locale={ko}
        minDate={new Date()}
        selected={date}
        onChange={onChange}
        monthsShown={1}
        highlightDates={metropolitanAreas}
        // includeDates={ableDate.map(date => new Date(date))}
        showPopperArrow={false}
        showPreviousMonths={false}
        focusSelectedMonth={false}
        customInput={<CustomInput />}
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => {
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

const DateWrap = styled.div`
  position: absolute;
  width: 352px;
  top: 300px;
  background-color: ${colors.WHITE};
  padding: 24px 16px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 10px 25px 4px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  > div {
    width: 100%;
  }
  .react-datepicker {
    display: flex;
    justify-content: center;
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
      background-color: ${colors.BLUE_BASE};
      border-radius: 60px;
      color: ${colors.WHITE};
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
