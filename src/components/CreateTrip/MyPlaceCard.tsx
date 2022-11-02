import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import {
  MyPlaceCardImageWrap,
  MyPlaceCardWrap,
  MyPlaceInfoWrap,
} from '../common/MyPlaceCard/styles';
import Image from '../../assets/png/thumbnail-area.png';
import { ReactComponent as AddIcon } from '../../assets/svg/plus.svg';

interface Props {
  onClickAdd?: () => void;
}

const MyPlaceCard: React.FC<Props> = ({ onClickAdd }) => {
  return (
    <MyPlaceCardWrap>
      <MyPlaceCardImageWrap>
        <img src={Image} alt="더미" width="100%" />
      </MyPlaceCardImageWrap>
      <MyPlaceInfoWrap>
        <MyPlaceName>장소명</MyPlaceName>
        <MyPlaceAddress>
          제주특별자치도 제주시 구좌읍 월정리 33-3
        </MyPlaceAddress>
        <MyPlaceHashTag>#카페 #맥주 #태그</MyPlaceHashTag>
        <MyPlaceDate>2022년 9월 29일</MyPlaceDate>
        <MyPlaceOptionButton onClick={onClickAdd} fill={colors.NEUTRAl_600} />
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
