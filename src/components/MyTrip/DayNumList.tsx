import Img from 'components/Img/Img';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sizes } from 'constants/sizes';
import leftArrow from 'assets/img/leftArrowIcon.svg';
import rightArrow from 'assets/img/rightArrowIcon.svg';
import * as Misc from 'services/misc';
import { useAppSelect } from 'store/configureStore.hooks';
import DayNumBox from './DayNumBox';
interface IProps {
  pickedDay: number;
  setPickedDay: React.Dispatch<React.SetStateAction<any>>;
  mFromDate?: string;
  mEndDate?: string;
  type?: string;
}
const DayNumList: React.FC<IProps> = ({
  pickedDay,
  mFromDate,
  mEndDate,
  type,
  setPickedDay,
}) => {
  const { fromDate, toDate } = useAppSelect(state => state.placeInfo);
  const isModalType = type === 'modal';
  const dateData = isModalType
    ? {
        fromDate: mFromDate,
        toDate: mEndDate,
      }
    : {
        fromDate,
        toDate,
      };

  const daylist = Array.from({
    length: Misc.diffDay(dateData.fromDate!, dateData.toDate!),
  }).map((el, idx) => idx + 1);

  const initBoxLen = isModalType ? 6 : 4;
  const [showBoxLen, setShowBoxLen] = useState(initBoxLen);

  const handleClickLeft = () => {
    if (daylist.length <= initBoxLen - 1) {
      return;
    }
    const changeList = showBoxLen === initBoxLen ? showBoxLen : showBoxLen - 1;
    setShowBoxLen(changeList);
  };

  const handleClickRight = () => {
    if (daylist.length <= initBoxLen - 1) {
      return;
    }
    const lastLen = daylist.length;
    const changeList = showBoxLen > lastLen ? lastLen + 1 : showBoxLen + 1;
    setShowBoxLen(changeList);
  };
  return (
    <Wrap>
      <DayWrap isModal={isModalType}>
        {daylist.map((el, idx) => (
          <DayNumBox
            key={el}
            idx={idx}
            isModalType={isModalType}
            showBoxLen={showBoxLen}
            pickedDay={pickedDay}
            setPickedDay={setPickedDay}
          />
        ))}
      </DayWrap>
      <ControlWrap>
        <Img
          src={leftArrow}
          width={sizes.ARROW_ICON_SIZE}
          height={sizes.ARROW_ICON_SIZE}
          onClick={handleClickLeft}
        />
        <Img
          src={rightArrow}
          width={sizes.ARROW_ICON_SIZE}
          height={sizes.ARROW_ICON_SIZE}
          onClick={handleClickRight}
        />
      </ControlWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 34px;
  gap: 8px;
`;

const DayWrap = styled.div<{ isModal: boolean }>`
  width: ${({ isModal }) => (isModal ? '368px' : '246px')};
  display: flex;
  overflow: hidden;
  position: relative;
`;

const ControlWrap = styled.div`
  width: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > img:nth-child(1) {
    margin-right: 8px;
  }
`;
export default DayNumList;
