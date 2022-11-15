import React from 'react';
import styled from 'styled-components';
import DayNumBox from './DayNumBox';

const DayNumList = () => {
  const dummy = [1, 2, 3];
  return (
    <Wrap>
      {dummy.map(el => (
        <DayNumBox dayNum={el} />
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;
export default DayNumList;
