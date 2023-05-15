import Img from 'components/Img/Img';
import { colors } from 'constants/colors';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import defaultLoginImg from 'assets/img/defaultLoginImg.svg';
import { fonts } from 'assets/fonts/fonts';
import MyPlaceContainer from 'components/UI/MyPlaceContainer';
import { getDetailTrip } from 'apis/tripApi';
import { MyTripRequest } from 'dtos/trip';
import { convertTripDate } from 'services/misc';
import TripSummary from 'components/MyTrip/TripSummary';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { routePath } from 'constants/route';
import useBottomLocation from '../hooks/useBottomLocation';

const ShareTrip = () => {
  const [tripData, setTripData] = useState<MyTripRequest>();
  const [pickedDay, setPickedDay] = useState(1);
  const [isBottomRef, isBottom] = useBottomLocation();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tripId = Number(params.get('tripId'));
  const nickname = window.atob(params.get('nickname')!);
  const navigate = useNavigate();

  useEffect(() => {
    getDetailTrip(tripId).then(res => setTripData(res));
  }, []);

  if (!tripData) {
    return null;
  }
  console.log(tripData);
  const tripDate = convertTripDate(tripData.start_date, tripData.end_date);

  const handleClickBtn = () => {
    navigate(routePath.INTRO);
  };

  return (
    <Wrap>
      <SummaryWrap>
        <HeaderWrap>
          <Img src={defaultLoginImg} width="32px" height="32px" />
          <span>{nickname}</span>
        </HeaderWrap>
        <TripSummary
          type="share"
          mTitle={tripData.name}
          mDate={tripDate}
          shareImg={tripData.trip_image_url!}
        />
      </SummaryWrap>
      <MyPlaceContainer
        ref={isBottomRef as React.Ref<HTMLDivElement>}
        pickedDay={pickedDay}
        setPickedDay={setPickedDay}
        mFromDate={tripData!.start_date}
        mEndDate={tripData!.end_date}
        daysData={tripData.trip_details}
      />
      {!isBottom && (
        <PopUpWrap>
          <span>언젠간 와있을 지도, 궁금하신가요?</span>
          <button onClick={handleClickBtn}>서비스 바로가기</button>
        </PopUpWrap>
      )}
    </Wrap>
  );
};

const movePopUp = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  border-radius: 8px;
  padding-top: 32px;
  gap: 20px;
  background-color: ${colors.WHITE};
  margin: 0 auto;
  position: relative;
`;

const HeaderWrap = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.NEUTRAl_100};
  gap: 12px;

  > span {
    ${fonts('text-sm-bold')};
  }
`;

const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-self: flex-start;
  width: 100%;
  gap: 24px;
`;

const PopUpWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 24px;
  background: ${colors.WHITE};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 8px 8px 0 0;
  flex-direction: column;
  gap: 8px;
  > span {
    text-align: center;
    ${fonts('text-xs-bold')};
    color: ${colors.NEUTRAl_900};
  }

  > button {
    padding: 0 20px;
    background-color: ${colors.BLUE_BASE};
    border-radius: 4px;
    height: 36px;
    color: ${colors.WHITE};
    ${fonts('text-xs-bold')};
    cursor: pointer;
  }
`;

export default ShareTrip;
