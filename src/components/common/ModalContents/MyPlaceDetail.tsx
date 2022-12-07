import Modal from 'components/UI/Modal';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as CFG from 'services/config.js';
import TripSummary from 'components/MyTrip/TripSummary';
import MyPlaceContainer from 'components/UI/MyPlaceContainer';
import ModalTitle from 'components/ModalContents/ModalTitle';
import { colors } from 'constants/colors';
import { getDetailTrip } from 'apis/tripApi';
import { MyTripRequest } from 'dtos/trip';
interface IProps {
  tripDate: string;
  tripData: MyTripRequest;
  onClose: () => void;
}
const MyPlaceDetail: React.FC<IProps> = ({ tripDate, tripData, onClose }) => {
  const { PLACE_DETAIL } = CFG.MODAL_MYPLACE;
  const [pickedDay, setPickedDay] = useState(1);

  if (!tripData) {
    return null;
  }
  console.log(tripData);
  return (
    <Modal onClose={onClose}>
      <Wrap>
        <SummaryWrap>
          <ModalTitle headerText={PLACE_DETAIL.headerText} onClose={onClose} />
          <TripSummary type="modal" mTitle={tripData?.name} mDate={tripDate} />
        </SummaryWrap>
        <MyPlaceContainer
          pickedDay={pickedDay}
          setPickedDay={setPickedDay}
          mFromDate={tripData!.start_date}
          mEndDate={tripData!.end_date}
          daysData={tripData.trip_details}
        />
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  border-radius: 8px;
  padding-top: 32px;
  gap: 20px;
  background-color: ${colors.WHITE};
`;

const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-self: flex-start;
  width: 100%;
  gap: 24px;
`;

export default MyPlaceDetail;
