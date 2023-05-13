import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import { KakaoAddress } from 'dtos/kakao';
import { MyPlaceResponse } from 'dtos/place';
import noCardImg from 'assets/img/noCardImg.svg';
import { dateFormat } from 'constants/common';
import dayjs from 'dayjs';
import {
  MyPlaceCardImageWrap,
  MyPlaceCardWrap,
  MyPlaceInfoWrap,
} from '../common/MyPlaceCard/styles';
import { ReactComponent as AddIcon } from '../../assets/svg/plus.svg';

interface Props {
  originData: MyPlaceResponse;
  cvtData: KakaoAddress;
  pickedDay: number;
  onSetDaysData: (addr: KakaoAddress, dayNum: number) => void;
  onClickCard: (addressInfo: KakaoAddress) => void;
}

const MyPlaceCard: React.FC<Props> = ({
  originData,
  cvtData,
  pickedDay,
  onSetDaysData,
  onClickCard,
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(prev => !prev);
  };

  return (
    <MyPlaceCardWrap
      onClick={() => onClickCard(cvtData)}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <MyPlaceCardImageWrap>
        <MyPlaceImage
          src={originData.image || noCardImg}
          alt="장소 이미지"
          isHover={isHover}
        />
      </MyPlaceCardImageWrap>
      <MyPlaceInfoWrap>
        <MyPlaceName>{originData.name}</MyPlaceName>
        <MyPlaceAddress>{originData.address}</MyPlaceAddress>
        <MyPlaceHashTag>
          {(originData.tag || []).map(tag => (
            <TagName key={tag}>#{tag}</TagName>
          ))}
        </MyPlaceHashTag>
        <MyPlaceDate>
          {dayjs(originData.createdDate).format(dateFormat)}
        </MyPlaceDate>
        <MyPlaceOptionButton
          fill={colors.NEUTRAl_600}
          onClick={() => onSetDaysData(cvtData, pickedDay)}
        />
      </MyPlaceInfoWrap>
    </MyPlaceCardWrap>
  );
};
export default MyPlaceCard;

const MyPlaceName = styled.div`
  ${fonts('text-sm-bold')};
`;
const MyPlaceAddress = styled.div`
  ${fonts('text-xs-regular')};
`;
const MyPlaceHashTag = styled.div`
  height: 48px;
  ${fonts('text-xxs-regular')};
`;
const MyPlaceDate = styled.div`
  margin-top: 6px;
  ${fonts('caption')};
`;
const MyPlaceOptionButton = styled(AddIcon)`
  position: absolute;
  top: 12px;
  right: 4px;
  cursor: pointer;
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

const TagName = styled.span`
  color: ${colors.BLUE_BASE};
`;

const MyPlaceImage = styled.img<{ isHover: boolean }>`
  position: absolute;
  width: ${({ isHover }) => (isHover ? '120%' : '100%')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
`;
