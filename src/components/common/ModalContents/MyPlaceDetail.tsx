import Modal from 'components/UI/Modal';
import React from 'react';
import styled from 'styled-components';
import * as CFG from 'services/config.js';
import TripSummary from 'components/MyTrip/TripSummary';
import MyPlaceContainer from 'components/UI/MyPlaceContainer';
import ModalTitle from 'components/ModalContents/ModalTitle';

const MyPlaceDetail: React.FC = () => {
  const { PLACE_DETAIL } = CFG.MODAL_MYPLACE;

  return (
    <Modal onClose={() => {}} bodyStyle="MY_PLACE_DETAIL">
      <SummaryWrap>
        <ModalTitle headerText={PLACE_DETAIL.headerText} />
        <TripSummary />
      </SummaryWrap>
      <MyPlaceContainer />
    </Modal>
  );
};

const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-self: flex-start;
  width: 100%;
  gap: 24px;
`;

export default MyPlaceDetail;
