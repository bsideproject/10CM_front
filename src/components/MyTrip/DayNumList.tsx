import Img from 'components/Img/Img';
import React from 'react';
import styled from 'styled-components';
import { sizes } from 'constants/sizes';
import leftArrow from 'assets/img/leftArrowIcon.svg';
import rightArrow from 'assets/img/rightArrowIcon.svg';
import DayNumBox from './DayNumBox';

const DayNumList = () => {
  const dummy = [1, 2, 3, 4];
  return (
    <Wrap>
      {dummy.map(el => (
        <DayNumBox dayNum={el} />
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
