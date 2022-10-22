import { fonts } from 'assets/fonts/fonts';
import DayNumber from 'components/DayNumber';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

interface Props {
  number: number;
  phone: string;
  address: string;
  title: string;
  onDeleteClick?: () => void;
}

const TripDayCard: React.FC<Props> = ({
  number,
  phone,
  address,
  title,
  onDeleteClick,
}) => {
  return (
    <TripDayCardWrap>
      <TripDayCardTop>
        <DayNumber color="green">{number}</DayNumber>
        <div onClick={onDeleteClick}>휴지통</div>
      </TripDayCardTop>
      <TripDayCardContent>
        <TripDayCardContentTitle>{title}</TripDayCardContentTitle>
        <TripDayCardContentAddress>{address}</TripDayCardContentAddress>
        <TripDayCardContentPhone>{phone}</TripDayCardContentPhone>
      </TripDayCardContent>
    </TripDayCardWrap>
  );
};
export default TripDayCard;

const TripDayCardWrap = styled.article`
  width: 310px;
  padding: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`;
const TripDayCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
