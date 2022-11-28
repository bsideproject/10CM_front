import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import {
  MyPlaceCardImageWrap,
  MyPlaceCardWrap,
  MyPlaceInfoWrap,
} from 'components/common/MyPlaceCard/styles';
import { MyPlaceResponse } from 'dtos/place';
import dayjs from 'dayjs';
import { dateFormat } from 'constants/common';
import Image from 'assets/png/thumbnail-area.png';
import { ReactComponent as OptionIcon } from 'assets/svg/my-place-option.svg';
import { ReactComponent as CheckedIcon } from 'assets/svg/checked.svg';
import { deletePlace } from 'apis/place';
import UpdatePost from 'components/Modals/UpdatePost';

interface Props {
  place: MyPlaceResponse;
  onDetailClick: (addressInfo: MyPlaceResponse) => void;
  onCardClick: (addressInfo: MyPlaceResponse) => void;
  onReFetch: () => Promise<void>;
  currentPlace: MyPlaceResponse | null;
  onTagClick: (tagName: string) => void;
}

const MyPlaceCard: React.FC<Props> = ({
  place,
  onDetailClick,
  onCardClick,
  onReFetch,
  currentPlace,
  onTagClick,
}) => {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isShowOption, setIsShowOption] = useState<boolean>(false);
  const [isHover, setIsHover] = useState(false);
  const optionRef = useRef<HTMLDivElement | null>(null);
  const optionButtonRef = useRef<SVGSVGElement | null>(null);

  const handleOptionOpen = (e: React.MouseEvent) => {
    setIsShowOption(prev => !prev);
  };
  const handleOptionClose = () => {
    setIsShowOption(false);
  };
  const handleDetailClick = (addressInfo: MyPlaceResponse) => {
    return () => {
      handleOptionClose();
      onDetailClick(addressInfo);
    };
  };
  const handleHover = () => {
    setIsHover(prev => !prev);
  };
  const handleUpdateClick = () => {
    setIsOpenUpdateModal(true);
  };
  const handleRemoveClick = async () => {
    try {
      await deletePlace(place.id);
      onReFetch();
    } catch (e) {
      console.log(e);
    }
  };
  const handleCardClick = () => {
    onCardClick(place);
  };
  const handleCloseModal = () => {
    setIsOpenUpdateModal(false);
  };
  const handleTagClick = (tagName: string) => {
    return () => {
      onTagClick(tagName);
    };
  };
  const handleDidNotOptionClick = (e: MouseEvent) => {
    console.log('good');
    if (
      e.target !== optionButtonRef.current &&
      !optionRef.current?.contains(e.target as Node)
    ) {
      setIsShowOption(false);
    }
  };
  useEffect(() => {
    if (isShowOption) {
      window.addEventListener('click', handleDidNotOptionClick);
    }
    if (!isShowOption) {
      window.removeEventListener('click', handleDidNotOptionClick);
    }
    return () => {
      window.removeEventListener('click', handleDidNotOptionClick);
    };
  }, [isShowOption]);
  return (
    <MyPlaceCardWrap
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleCardClick}
    >
      <MyPlaceCardImageWrap>
        <MyPlaceImage src={Image} alt="장소 이미지" isHover={isHover} />
      </MyPlaceCardImageWrap>
      <MyPlaceInfoWrap>
        <MyPlaceName>
          {currentPlace?.id === place.id && (
            <CheckedIcon width={20} height={20} fill={colors.GREEN_BASE} />
          )}
          {place.name}
        </MyPlaceName>
        <MyPlaceAddress>{place.address}</MyPlaceAddress>
        <MyPlaceHashTag>
          {(place?.tag || []).map(tag => {
            return (
              <TagName key={tag} onClick={handleTagClick(tag)}>
                #{tag}
              </TagName>
            );
          })}
        </MyPlaceHashTag>
        <MyPlaceDate>{dayjs(place.createdDate).format(dateFormat)}</MyPlaceDate>
        <MyPlaceOptionButton ref={optionButtonRef} onClick={handleOptionOpen} />
        {isShowOption && (
          <MyPlaceOptionBox ref={optionRef}>
            <MyPlaceOptionItem onClick={handleDetailClick(place)}>
              상세보기
            </MyPlaceOptionItem>
            <MyPlaceOptionItem onClick={handleUpdateClick}>
              수정하기
            </MyPlaceOptionItem>
            <MyPlaceOptionItem onClick={handleRemoveClick}>
              삭제하기
            </MyPlaceOptionItem>
          </MyPlaceOptionBox>
        )}
      </MyPlaceInfoWrap>
      {isOpenUpdateModal && (
        <UpdatePost
          addressInfo={place}
          onClose={handleCloseModal}
          onUpdateComplete={onReFetch}
        />
      )}
    </MyPlaceCardWrap>
  );
};
export default React.memo(MyPlaceCard);

const MyPlaceName = styled.div`
  display: flex;
  align-items: center;
  gap: 0 4px;
  ${fonts('text-sm-bold')};
  color: ${colors.NEUTRAl_900};
`;
const MyPlaceAddress = styled.div`
  ${fonts('text-xs-regular')};
  color: ${colors.NEUTRAl_400};
`;
const MyPlaceHashTag = styled.div`
  display: flex;
  gap: 0 4px;
  flex-wrap: wrap;
  height: 48px;
  ${fonts('text-xxs-regular')};
`;
const TagName = styled.span`
  color: ${colors.BLUE_BASE};
  cursor: pointer;
`;
const MyPlaceDate = styled.div`
  margin-top: 6px;
  ${fonts('caption')};
  color: ${colors.NEUTRAl_300};
`;
const MyPlaceOptionButton = styled(OptionIcon)`
  position: absolute;
  top: 12px;
  right: 4px;
  cursor: pointer;
`;
const MyPlaceImage = styled.img<{ isHover: boolean }>`
  position: absolute;
  width: ${({ isHover }) => (isHover ? '120%' : '100%')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
`;
const MyPlaceOptionBox = styled.div`
  width: 120px;
  position: absolute;
  padding: 8px;
  top: 0;
  right: 40px;
  background-color: ${colors.WHITE};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;
const MyPlaceOptionItem = styled.div`
  padding: 8px 12px;
  ${fonts('text-xxs-regular')};
  cursor: pointer;
`;
