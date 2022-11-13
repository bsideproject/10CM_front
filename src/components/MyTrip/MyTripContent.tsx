import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import EmptyContent from 'components/common/EmptyContent/EmptyContent';
import CompletedTripCard from 'components/CompletedTripCard/CompletedTripCard';
import CompletedTripGroup from 'components/CompletedTripGroup/CompletedTripGroup';
import MakeNewPlace from 'components/common/ModalContents/MakeNewPlace';
const MyTripContent: React.FC = () => {
  const [onModal, setOnModal] = useState(false);
  const handleControlModal = () => {
    setOnModal(!onModal);
  };

  return (
    <Wrap>
      <Header>
        <HeaderText>나의 여행 (N)</HeaderText>
        <Button
          buttonType="filled"
          buttonSize="medium"
          buttonWidth="160px"
          onClick={handleControlModal}
          disabled={false}
        >
          <ButtonText>새로운 여행 만들기</ButtonText>
        </Button>
      </Header>
      <MainWrap>
        {/* <EmptyContent /> */}
        <CompletedTripGroup />
        <CompletedTripGroup />
      </MainWrap>
      {onModal && <MakeNewPlace onClose={handleControlModal} />}
    </Wrap>
  );
};

const Wrap = styled.div`
  flex: 1;
  padding-top: 45px;
  width: 100%;
  background-color: ${colors.WHITE};
  padding: 45px 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
`;

const HeaderText = styled.span`
  ${fonts('title-lg-bold')};
  color: #000000;
`;

const ButtonText = styled.span`
  ${fonts('text-sm-bold')};
  color: ${colors.WHITE};
  letter-spacing: 0.013em;
`;

const MainWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export default MyTripContent;
