import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MyPlaceResponse, Sort } from 'dtos/place';
import { ReactComponent as SortIcon } from 'assets/svg/my-place-sort.svg';
import { ReactComponent as CheckIcon } from 'assets/svg/checked.svg';
import MyPlaceCard from './MyPlaceCard';

interface Props {
  placeList: MyPlaceResponse[];
  currentPlace: MyPlaceResponse | null;
  hasNextPage: boolean;
  isLoading: boolean;
  currentSort: Sort;
  onChangeSort: (sortValue: Sort) => void;
  onDetailClick: (addressInfo: MyPlaceResponse) => void;
  onCardClick: (addressInfo: MyPlaceResponse) => void;
  onReFetch: () => Promise<void>;
  onTagClick: (tagName: string) => void;
}

const MyPlaceGroup = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      placeList,
      hasNextPage,
      isLoading,
      currentSort,
      currentPlace,
      onChangeSort,
      onDetailClick,
      onCardClick,
      onReFetch,
      onTagClick,
    },
    ref,
  ) => {
    const [isSortClicked, setIsSortClicked] = useState(false);

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
    const handleSortClick = () => {
      setIsSortClicked(prev => !prev);
    };
    const handleSortOptionClick = (sortValue: Sort) => {
      return () => {
        onChangeSort(sortValue);
      };
    };
    return (
      <GroupWrap>
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
                    {currentSort === 'modifiedDate,DESC' && <CheckIcon />}
                    <span>최근 수정 순</span>
                  </SortOption>
                  <SortOption
                    isSelected={currentSort === 'createdDate,DESC'}
                    onClick={handleSortOptionClick('createdDate,DESC')}
                  >
                    {currentSort === 'createdDate,DESC' && <CheckIcon />}
                    <span>최근 등록 순</span>
                  </SortOption>
                  <SortOption
                    isSelected={currentSort === 'name,ASC'}
                    onClick={handleSortOptionClick('name,ASC')}
                  >
                    {currentSort === 'name,ASC' && <CheckIcon />}
                    <span>장소 이름 순</span>
                  </SortOption>
                </SortOptionWrap>
              )}
            </SortButton>
          </MyPlacesTop>
          <MyPlaceListWrap>
            {placeList.map(place => (
              <MyPlaceCard
                key={place.id}
                currentPlace={currentPlace}
                place={place}
                onDetailClick={onDetailClick}
                onCardClick={onCardClick}
                onReFetch={onReFetch}
                onTagClick={onTagClick}
              />
            ))}
            {hasNextPage && !isLoading && <div ref={ref}>이게 보여~</div>}
          </MyPlaceListWrap>
        </MyPlacesWrap>
      </GroupWrap>
    );
  },
);
export default React.memo(MyPlaceGroup);

const GroupWrap = styled.div`
  height: calc(100vh - 96px);
`;

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
  position: relative;
  ${fonts('text-xs')};
  color: ${colors.NEUTRAl_500};
  padding: 5px 16px 5px 11px;
  cursor: pointer;
`;
const MyPlaceListWrap = styled.div`
  height: calc(100% - 78px);
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  overflow-x: hidden;
  /* > div + div {
    margin-top: 16px;
  } */
`;
const SortOptionWrap = styled.div`
  position: absolute;
  top: 36px;
  right: 0;
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
