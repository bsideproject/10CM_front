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
}
const DayNumList: React.FC<IProps> = ({ pickedDay, setPickedDay }) => {
  const { fromDate, toDate } = useAppSelect(state => state.placeInfo);
  const daylist = Array.from({ length: Misc.diffDay(fromDate, toDate) }).map(
    (el, idx) => idx + 1,
  );
  const [showBoxLen, setShowBoxLen] = useState(4);

  const handleClickLeft = () => {
    if (daylist.length <= 3) {
      return;
    }
    const changeList = showBoxLen === 4 ? showBoxLen : showBoxLen - 1;
    setShowBoxLen(changeList);
  };

  const handleClickRight = () => {
    if (daylist.length <= 3) {
      return;
    }
    const lastLen = daylist.length;
    const changeList = showBoxLen > lastLen ? lastLen + 1 : showBoxLen + 1;
    setShowBoxLen(changeList);
  };
  return (
    <Wrap>
      <DayWrap>
        {daylist.map((el, idx) => (
          <DayNumBox
            key={el}
            idx={idx}
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
          padding="0 8px 0 0"
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

const DayWrap = styled.div`
  width: 246px;
  display: flex;
  overflow: hidden;
  position: relative;
`;

const ControlWrap = styled.div`
  width: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export default DayNumList;
