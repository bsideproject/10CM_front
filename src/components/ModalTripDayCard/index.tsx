import { fonts } from 'assets/fonts/fonts';
import DayNumber from 'components/common/DayNumber';
import { colors } from 'constants/colors';
import { MyTripDetail } from 'dtos/trip';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  number: number;
  phone: string;
  address: string;
  title: string;
  cardData: MyTripDetail;
}

const TripDayCard: React.FC<IProps> = ({
  number,
  phone,
  address,
  title,
  cardData,
}) => {
  return (
    <TripDayCardWrap>
      <TripDayCardTop>
        <DayNumber color={number % 2 === 0 ? 'blue' : 'green'}>
          {number}
        </DayNumber>
      </TripDayCardTop>
      <TripDayCardContent>
        <TripDayCardContentTitle>{title}</TripDayCardContentTitle>
        <TripDayCardContentAddress>{address}</TripDayCardContentAddress>
        <TripDayCardContentPhone>{phone}</TripDayCardContentPhone>
      </TripDayCardContent>
    </TripDayCardWrap>
  );
};

const TripDayCardWrap = styled.article`
  width: calc(432px - 32px);
  padding: 16px;
  border-radius: 12px;
  background-color: white;
`;
const TripDayCardTop = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;
const TripDayCardContent = styled.div`
  margin-top: 8px;
  > div + div {
    margin-top: 8px;
  }
`;
const TripDayCardContentTitle = styled.div`
  color: ${colors.NEUTRAl_900};
  ${fonts('text-sm-bold')};
`;
const TripDayCardContentAddress = styled.div`
  color: ${colors.NEUTRAl_900};
  ${fonts('text-xs-regular')};
`;
const TripDayCardContentPhone = styled.div`
  color: ${colors.NEUTRAl_400};
  ${fonts('caption')};
`;

export default TripDayCard;
