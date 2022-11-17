import DayNumList from 'components/MyTrip/DayNumList';
import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import PickDateInfo from 'components/MyTrip/PickDateInfo';
import EmptyDnd from 'components/common/EmptyContent/EmptyDnd';
import TripSummary from 'components/MyTrip/TripSummary';
import DraggableItem, { Item } from 'components/TripDayGroup';
import { AddrT, DndType } from 'types/dtos/address';
interface IProps {
  daysData: AddrT[][];
}

const DayListBar: React.FC<IProps> = ({ daysData }) => {
  const [dummy, setDummy] = useState([
    {
      number: 1,
      phone: '010-1111-2222',
      address: 'adsadadssdasdad',
      title: '이경수',
    },
    {
      number: 2,
      phone: '010-1111-2222',
      address: 'adsadadssdasdad',
      title: '이정수',
    },
    {
      number: 3,
      phone: '010-1111-2222',
      address: 'adsadadssdasdad',
      title: '이영수',
    },
    {
      number: 1,
      phone: '010-1111-2222',
      address: 'adsadadssdasdad',
      title: '이경수',
    },
    {
      number: 2,
      phone: '010-1111-2222',
      address: 'adsadadssdasdad',
      title: '이정수',
    },
    {
      number: 3,
      phone: '010-1111-2222',
      address: 'adsadadssdasdad',
      title: '이영수',
    },
    {
      number: 1,
      phone: '010-1111-2222',
      address: 'adsadadssdasdad',
      title: '이경수',
    },
    {
      number: 2,
      phone: '010-1111-2222',
      address: 'adsadadssdasdad',
      title: '이정수',
    },
    {
      number: 3,
      phone: '010-1111-2222',
      address: 'adsadadssdasdad',
      title: '이영수',
    },
  ]);

  const dummyFunc = (items: Item[]) => {
    setDummy(items);
  };
  return (
    <Wrap>
      <TripSummary />
      <DayNumList />
      <PickDateInfo />
      <DraggableItem itemList={dummy} onChangeList={dummyFunc} />
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
`;

export default DayListBar;

// {dummy.length === 0 && <EmptyDnd />}
// {dummy.length > 0 && (
//   <DraggableItem itemList={dummy} onChangeList={dummyFunc} />
// )}
