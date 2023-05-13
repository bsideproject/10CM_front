import { fonts } from 'assets/fonts/fonts';
import MyPlaceCard from 'components/CreateTrip/MyPlaceCard';
import { colors } from 'constants/colors';
import { KakaoAddress } from 'dtos/kakao';
import { Sort } from 'dtos/place';
import useMyPlaceList from 'hooks/useMyPlaceList';
import React, { useState } from 'react';
import { convertPlaceData } from 'services/misc';
import styled, { css } from 'styled-components';
import { ReactComponent as CheckIcon } from 'assets/svg/sortChecked.svg';
import { ReactComponent as SortIcon } from '../../assets/svg/my-place-sort.svg';

interface Props {
  pickedDay: number;
  onSetDaysData: (addr: KakaoAddress, dayNum: number) => void;
  onClickCard: (addressInfo: KakaoAddress) => void;
}

const MyPlaceGroup: React.FC<Props> = ({
  pickedDay,
  onSetDaysData,
  onClickCard,
}) => {
  const {
    myPlaceList,
    isMyListFetching,
    handleChangeSort,
    reFetchMyPlaceList,
    hasMyPlaceNextPage,
    getMyPlaceListNextPage,
    currentSort,
  } = useMyPlaceList();

  const [isSortClicked, setIsSortClicked] = useState(false);
  const convertPlaceList = convertPlaceData(myPlaceList);

  const handleSortClick = () => {
    setIsSortClicked(prev => !prev);
  };

  const handleSortOptionClick = (sortValue: Sort) => {
    return () => {
      handleChangeSort(sortValue);
    };
  };

  const getCurrentSortInKorean = (currentSort: Sort) => {
    switch (currentSort) {
      case 'createdDate,DESC':
        return '최근 등록 순';
      case 'modifiedDate,DESC':
        return '최근 수정 순';
      case 'name,ASC':
        return '장소 이름 순';
      default:
        return '최근 등록 순';
    }
  };

  return (
    <MyPlacesWrap>
      <MyPlacesTop>
        <MyPlacesTitle>나의 관심장소</MyPlacesTitle>
        <SortButton onClick={handleSortClick}>
          <SortIcon />
          <span>{getCurrentSortInKorean(currentSort)}</span>
          {isSortClicked && (
            <SortOptionWrap>
              <SortOption
                isSelected={currentSort === 'modifiedDate,DESC'}
                onClick={handleSortOptionClick('modifiedDate,DESC')}
              >
                {currentSort === 'modifiedDate,DESC' && <SortChecked />}
                <span>최근 수정 순</span>
              </SortOption>
              <SortOption
                isSelected={currentSort === 'createdDate,DESC'}
                onClick={handleSortOptionClick('createdDate,DESC')}
              >
                {currentSort === 'createdDate,DESC' && <SortChecked />}
                <span>최근 등록 순</span>
              </SortOption>
              <SortOption
                isSelected={currentSort === 'name,ASC'}
                onClick={handleSortOptionClick('name,ASC')}
              >
                {currentSort === 'name,ASC' && <SortChecked />}
                <span>장소 이름 순</span>
              </SortOption>
            </SortOptionWrap>
          )}
        </SortButton>
      </MyPlacesTop>
      <MyPlacesListWrap>
        {myPlaceList.map((place, idx) => (
          <MyPlaceCard
            key={place.address}
            originData={place}
            cvtData={convertPlaceList[idx]}
            pickedDay={pickedDay}
            onSetDaysData={onSetDaysData}
            onClickCard={onClickCard}
          />
        ))}
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

const SortOptionWrap = styled.div`
  position: absolute;
  top: 254px;
  left: 560px;
  padding: 8px;
  ${fonts('text-xxs-regular')};
  color: ${colors.NEUTRAl_900};
  background-color: ${colors.WHITE};
  border-radius: 4px;
  z-index: 5;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
`;

const SortOption = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0 4px;
  width: 144px;
  padding: 8px 12px;
  border-radius: 4px;
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${colors.BLUE_BASE};
    `}
  & + & {
    margin-top: 8px;
  }
  &:hover {
    background-color: ${colors.NEUTRAl_50};
  }
`;

const SortChecked = styled(CheckIcon)``;
