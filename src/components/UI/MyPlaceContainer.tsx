import DayNumList from 'components/MyTrip/DayNumList';
import PickDateInfo from 'components/MyTrip/PickDateInfo';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const MyPlaceContainer: React.FC = () => {
  return (
    <Wrap>
      <DayNumList setPickedDay={() => {}} />
      <PickDateInfo pickedDay={0} />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 40px 24px;
  gap: 20px;
  width: 100%;
  background-color: ${colors.NEUTRAl_50};
`;

export default MyPlaceContainer;
