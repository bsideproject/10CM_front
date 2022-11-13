import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import Img from 'components/Img/Img';
import emptyContent from 'assets/img/emptyContent.svg';

const CompletedTripCard = () => {
  return (
    <Wrap>
      <Img src={emptyContent} width="244px" height="137px" />
      <TripWrap>
        <TripTitle>국내 여행</TripTitle>
        <TripDate>2022.9.28 - 9.30</TripDate>
      </TripWrap>
      <TripParagraph>
        여행 소개 어쩌구 저쩌구 여행 소개 어쩌구 저쩌구여행 소개 어쩌구
        저쩌구여행...
      </TripParagraph>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 284px;
  padding: 22.5px 20px;
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
`;

export default CompletedTripCard;
