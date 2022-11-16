import Img from 'components/Img/Img';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from 'assets/img/smallNavLogo.svg';
import { sizes } from 'constants/sizes';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import { useNavigate } from 'react-router-dom';

const TripSummary = () => {
  const { title, fromDate, toDate } = useAppSelect(state => state.placeInfo);
  const navigate = useNavigate();
  const sliceToDate = toDate.slice(5);
  const dateText = `${fromDate.replaceAll('-', '.')} - ${sliceToDate.replaceAll(
    '-',
    '.',
  )}`;
  useEffect(() => {
    if (title.length === 0) {
      navigate('/my-trip');
    }
    // fix: 새로고침 시 돌아가기
  }, [title]);
  return (
    <Wrap>
      <SummaryTitle>
        <Img
          src={logo}
          width={sizes.TRIP_SUMMARY_SIZE}
          height={sizes.TRIP_SUMMARY_SIZE}
        />
        <TripWrap>
          <TripName>{title}</TripName>
          <TripDate>{dateText}</TripDate>
        </TripWrap>
      </SummaryTitle>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
`;

const SummaryTitle = styled.div`
  display: flex;
  gap: 8px;
`;

const TripWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TripName = styled.span`
  width: 238px;
  ${fonts('text-sm-none')};
  color: ${colors.NEUTRAl_900};
  letter-spacing: 0.013em;
`;

const TripDate = styled.span`
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
  letter-spacing: 0.013em;
`;

export default TripSummary;
