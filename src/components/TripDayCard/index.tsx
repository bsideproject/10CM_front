import { fonts } from 'assets/fonts/fonts';
import DayNumber from 'components/common/DayNumber';
import Img from 'components/Img/Img';
import { colors } from 'constants/colors';
import React, { HTMLAttributes } from 'react';
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';
import { KakaoAddress } from 'dtos/kakao';
import styled from 'styled-components';
import trashIcon from 'assets/img/trashIcon.svg';
import { sizes } from '../../constants/sizes';

interface Props extends HTMLAttributes<HTMLDivElement> {
  number: number;
  phone: string;
  address: string;
  title: string;
  dndProps: any;
  pickedDay: number;
  cardData: KakaoAddress;
  removeDaysData: (addr: KakaoAddress, dayNum: number) => void;
}

const TripDayCard = React.forwardRef<HTMLElement, Props>(
  (
    {
      number,
      phone,
      address,
      title,
      style,
      cardData,
      pickedDay,
      removeDaysData,
      dndProps,
    },
    ref,
  ) => {
    const handleRemoveItem = () => {
      removeDaysData(cardData, pickedDay);
    };

    return (
      <TripDayCardWrap ref={ref} {...dndProps} style={style}>
        <TripDayCardTop>
          <DayNumber color={number % 2 === 0 ? 'blue' : 'green'}>
            {number}
          </DayNumber>
          <div onClick={handleRemoveItem}>
            <Img
              src={trashIcon}
              width={sizes.TRASH_ICON_SIZE}
              height={sizes.TRASH_ICON_SIZE}
            />
          </div>
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
  /* 432px */
  padding: 16px;
  border-radius: 12px;
  background-color: white;
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
