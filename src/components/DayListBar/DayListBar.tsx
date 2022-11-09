import DayNumList from 'components/MyTrip/DayNumList';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import PickDateInfo from 'components/MyTrip/PickDateInfo';
import EmptyDnd from 'components/common/EmptyContent/EmptyDnd';
import TripSummary from 'components/MyTrip/TripSummary';
const DayListBar = () => {
  return (
    <Wrap>
      <TripSummary />
      <DayNumList />
      <PickDateInfo />
      <EmptyDnd />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 20px;
  background-color: ${colors.NEUTRAl_50};
  flex: 1;
`;

export default DayListBar;
