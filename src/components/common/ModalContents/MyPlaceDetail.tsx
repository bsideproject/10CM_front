import Modal from 'components/UI/Modal';
import React from 'react';
import styled from 'styled-components';
import * as CFG from 'services/config.js';
import TripSummary from 'components/MyTrip/TripSummary';
import MyPlaceContainer from 'components/UI/MyPlaceContainer';
import ModalTitle from 'components/ModalContents/ModalTitle';
import { colors } from 'constants/colors';

const MyPlaceDetail: React.FC = () => {
  const { PLACE_DETAIL } = CFG.MODAL_MYPLACE;

  return (
    <Modal onClose={() => {}}>
      <Wrap>
        <SummaryWrap>
          <ModalTitle headerText={PLACE_DETAIL.headerText} />
          <TripSummary />
        </SummaryWrap>
        <MyPlaceContainer />
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
