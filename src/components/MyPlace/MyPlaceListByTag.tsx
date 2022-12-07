import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'assets/svg/close.svg';
import useInterSectionObserver from 'hooks/useInterSectionOpserver';
import useMyPlaceList from 'hooks/useMyPlaceList';
import { MyPlaceResponse } from 'dtos/place';
import MyPlaceCard from './MyPlaceCard';

interface Props {
  placeList: MyPlaceResponse[];
  onCancel: () => void;
  currentTag: string;
  isLoading: boolean;
  hasNextPage: boolean;
  currentPlace: MyPlaceResponse | null;
  onDetailClick: (addressInfo: MyPlaceResponse) => void;
  onCardClick: (addressInfo: MyPlaceResponse) => void;
  onReFetch: () => Promise<void>;
  onTagClick: (tagName: string) => void;
}

const MyPlaceListByTag = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      placeList,
      currentPlace,
      currentTag,
      isLoading,
      hasNextPage,
      onCancel,
      onReFetch,
      onTagClick,
      onCardClick,
      onDetailClick,
    },
    ref,
  ) => {
    return (
      <MyPlaceListWrap>
        <MyPlaceListHeader>
          <TagName>#{currentTag}</TagName>
          <CloseButton onClick={onCancel} fill={colors.NEUTRAl_500} />
        </MyPlaceListHeader>
        <MyPlaceList>
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
        </MyPlaceList>
      </MyPlaceListWrap>
    );
  },
);
export default MyPlaceListByTag;

const MyPlaceListWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.WHITE};
`;
const MyPlaceListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 18px 6px 20px;
`;
const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;
const TagName = styled.h2`
  ${fonts('title-lg-bold')};
  color: ${colors.NEUTRAl_900};
`;
const MyPlaceList = styled.div`
  height: calc(100vh - 72px);
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  overflow-x: hidden;
`;
