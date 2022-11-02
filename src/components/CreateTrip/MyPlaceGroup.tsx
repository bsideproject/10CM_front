import { fonts } from 'assets/fonts/fonts';
import MyPlaceCard from 'components/CreateTrip/MyPlaceCard';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SortIcon } from '../../assets/svg/my-place-sort.svg';

interface Props {}

const MyPlaceGroup: React.FC<Props> = () => {
  return (
    <MyPlacesWrap>
      <MyPlacesTop>
        <MyPlacesTitle>나의 관심장소</MyPlacesTitle>
        <SortButton>
          <SortIcon />
          최근 수정 순
        </SortButton>
      </MyPlacesTop>
      <MyPlacesListWrap>
        <MyPlaceCard />
        <MyPlaceCard />
        <MyPlaceCard />
        <MyPlaceCard />
      </MyPlacesListWrap>
    </MyPlacesWrap>
  );
};
export default MyPlaceGroup;

const MyPlacesWrap = styled.div`
  height: 100%;
`;
const MyPlacesTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 12px 20px;
`;
const MyPlacesTitle = styled.h3`
  ${fonts('title-lg-bold')}
  color:${colors.NEUTRAl_800};
`;
const SortButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0 6px;
  height: 36px;
  ${fonts('text-xs')};
  color: ${colors.NEUTRAl_500};
  padding: 5px 16px 5px 11px;
  cursor: pointer;
`;
const MyPlacesListWrap = styled.div`
  height: calc(100% - 78px);
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  overflow-x: hidden;
`;
