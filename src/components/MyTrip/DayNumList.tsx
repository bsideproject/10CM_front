import Img from 'components/Img/Img';
import React from 'react';
import styled from 'styled-components';
import { sizes } from 'constants/sizes';
import leftArrow from 'assets/img/leftArrowIcon.svg';
import rightArrow from 'assets/img/rightArrowIcon.svg';
import * as Misc from 'services/misc';
import { useAppSelect } from 'store/configureStore.hooks';
import DayNumBox from './DayNumBox';
interface IProps {
  setPickedDay: React.Dispatch<React.SetStateAction<any>>;
}
const DayNumList: React.FC<IProps> = ({ setPickedDay }) => {
  const { fromDate, toDate } = useAppSelect(state => state.placeInfo);
  const daylist = Array.from({ length: Misc.diffDay(fromDate, toDate) }).map(
    (el, idx) => idx + 1,
  );

  return (
    <Wrap>
      {daylist.map(el => (
        <DayNumBox key={el} dayNum={el} setPickedDay={setPickedDay} />
      ))}
      <ControlWrap>
        <Img
          src={leftArrow}
          width={sizes.ARROW_ICON_SIZE}
          height={sizes.ARROW_ICON_SIZE}
        />
        <Img
          src={rightArrow}
          width={sizes.ARROW_ICON_SIZE}
          height={sizes.ARROW_ICON_SIZE}
        />
      </ControlWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const ControlWrap = styled.div`
  width: 56px;
  display: flex;
  justify-content: space-between;
`;
export default DayNumList;
