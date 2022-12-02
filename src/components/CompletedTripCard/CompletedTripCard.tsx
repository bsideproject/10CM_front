import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import Img from 'components/Img/Img';
import { convertTripDate } from 'services/misc';
import emptyContent from 'assets/img/emptyContent.svg';
import { MyTrip } from 'dtos/trip';
import shareIcon from 'assets/img/shareIcon.svg';
import dotIcon from 'assets/img/dotIcon.svg';
import { sizes } from 'constants/sizes';
import MyPlaceDetail from 'components/common/ModalContents/MyPlaceDetail';
interface IProps {
  data: MyTrip;
}
const CompletedTripCard: React.FC<IProps> = ({ data }) => {
  const [clickedOption, setClickedOption] = useState(false);
  const [onDetailModal, setOnDetailModal] = useState(false);
  const handleClickDot = () => {
    setClickedOption(!clickedOption);
  };

  const handleClickDetail = () => {
    setOnDetailModal(!onDetailModal);
  };

  const tripDate = convertTripDate(data.start_date, data.end_date);

  return (
    <Wrap>
      <Img src={emptyContent} width="244px" height="137px" />
      <TripWrap>
        <TripTitle>{data.name}</TripTitle>
        <TripDate>{tripDate}</TripDate>
      </TripWrap>
      <TripParagraph>{data.description}</TripParagraph>
      <OptionWrap>
        <Img
          src={shareIcon}
          width={sizes.SHARE_ICON_SIZE}
          height={sizes.SHARE_ICON_SIZE}
          onClick={() => {}}
        />
        <Img
          src={dotIcon}
          width={sizes.DOT_ICON_SIZE}
          height={sizes.DOT_ICON_SIZE}
          onClick={handleClickDot}
        />
        {clickedOption && (
          <OptionList>
            <OptionItem onClick={handleClickDetail}>상세보기</OptionItem>
            <OptionItem>수정하기</OptionItem>
            <OptionItem>삭제하기</OptionItem>
          </OptionList>
        )}
      </OptionWrap>
      {onDetailModal && (
        <MyPlaceDetail
          tripId={data.trip_id}
          tripDate={tripDate}
          onClose={handleClickDetail}
        />
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 284px;
  padding: 20px;
  gap: 12px;
  background-color: ${colors.WHITE};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
`;

const TripWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TripTitle = styled.span`
  ${fonts('text-sm-bold')};
  color: ${colors.BLACK};
  letter-spacing: 0.013em;
  width: 100%;
`;

const TripDate = styled.span`
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
  letter-spacing: 0.013em;
`;

const TripParagraph = styled.p`
  width: 100%;
  ${fonts('text-xs-regular')};
  color: ${colors.BLACK};
  letter-spacing: 0.013em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const OptionWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  right: 0;
  width: 120px;
  background-color: ${colors.WHITE};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 8px;
  gap: 8px;
`;

const OptionItem = styled.li`
  display: flex;
  flex-direction: column;
  ${fonts('text-xxs-regular')};
  color: #222222;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.NEUTRAl_50};
    border-radius: 8px;
  }
`;
export default CompletedTripCard;
