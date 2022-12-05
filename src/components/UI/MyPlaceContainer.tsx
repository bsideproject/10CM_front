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
  console.log(addrData);
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
        {addrData.map((el, idx) => (
          <TripDayCard
            key={el.latitude}
            number={idx + 1}
            phone={el.phone! || '전화번호 없음'}
            address={el.address}
            title={el.name}
            cardData={el}
          />
        ))}
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 511px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default MyPlaceContainer;
