import { fonts } from 'assets/fonts/fonts';
import DayNumber from 'components/common/DayNumber';
import { colors } from 'constants/colors';
import React, { HTMLAttributes } from 'react';
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  number: number;
  phone: string;
  address: string;
  title: string;
  onDeleteClick?: () => void;
  dndProps: any;
}

const TripDayCard = React.forwardRef<HTMLElement, Props>(
  ({ number, phone, address, title, style, onDeleteClick, dndProps }, ref) => {
    return (
      <TripDayCardWrap ref={ref} {...dndProps} style={style}>
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
  },
);
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
