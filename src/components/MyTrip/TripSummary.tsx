import Img from 'components/Img/Img';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import defaultTripImg from 'assets/img/defaultTripImg.svg';

import { sizes } from 'constants/sizes';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import { useNavigate } from 'react-router-dom';
interface IProps {
  type?: string;
  mTitle?: string;
  mDate?: string;
}
const TripSummary: React.FC<IProps> = ({ type, mTitle, mDate }) => {
  const { title, fromDate, toDate, img } = useAppSelect(
    state => state.placeInfo,
  );
  const navigate = useNavigate();
  const sliceToDate = toDate.slice(5);
  const dateText = `${fromDate.replaceAll('-', '.')} - ${sliceToDate.replaceAll(
    '-',
    '.',
  )}`;
  useEffect(() => {
    if (title.length === 0 && type !== 'share') {
      navigate('/my-trip');
    }
    // fix: 새로고침 시 돌아가기
  }, [title]);

  const summaryData =
    type === 'modal' || type === 'share'
      ? { title: mTitle, date: mDate }
      : { title, date: dateText };

  return (
    <Wrap>
      <SummaryTitle>
        <Img
          src={img.url || defaultTripImg}
          width={sizes.TRIP_SUMMARY_SIZE}
          height={sizes.TRIP_SUMMARY_SIZE}
        />
        <TripWrap>
          <TripName>{summaryData.title}</TripName>
          <TripDate>{summaryData.date}</TripDate>
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
