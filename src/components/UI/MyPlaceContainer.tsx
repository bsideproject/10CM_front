import TripDayCard from 'components/ModalTripDayCard';
import DayNumList from 'components/MyTrip/DayNumList';
import PickDateInfo from 'components/MyTrip/PickDateInfo';
// import DraggableItem from 'components/TripDayGroup';
import { colors } from 'constants/colors';
import { MyTripDetail } from 'dtos/trip';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
interface IProps {
  pickedDay: number;
  setPickedDay: React.Dispatch<React.SetStateAction<number>>;
  mFromDate: string;
  mEndDate: string;
  daysData: MyTripDetail[][];
}
const MyPlaceContainer: React.FC<IProps> = ({
  pickedDay,
  mFromDate,
  mEndDate,
  daysData,
  setPickedDay,
}) => {
  const [addrData, setAddrData] = useState(daysData[pickedDay - 1]);

  useEffect(() => {
    setAddrData(daysData[pickedDay - 1]);
  }, [daysData, pickedDay]);

  return (
    <Wrap>
      <DayNumList
        pickedDay={pickedDay}
        mFromDate={mFromDate}
        mEndDate={mEndDate}
        setPickedDay={setPickedDay}
        type="modal"
      />
      <PickDateInfo pickedDay={pickedDay} mFromDate={mFromDate} type="modal" />
      <CardWrap>
        <TripDayCard
          number={0}
          phone="010-1111-1111"
          address={addrData[0].address_detail}
          title={addrData[0].address}
          cardData={addrData[0]}
        />
      </CardWrap>
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

const CardWrap = styled.div`
  width: 100%;
  padding-top: 20px;
`;

export default MyPlaceContainer;
