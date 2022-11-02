import { fonts } from 'assets/fonts/fonts';

import {
  MyPlaceCardImageWrap,
  MyPlaceCardWrap,
  MyPlaceInfoWrap,
} from 'components/CreateTrip/MyPlaceCard/styles';
import React from 'react';
import styled from 'styled-components';
import Skeleton from '..';

interface Props {
  // TODO 스토리북에서 보려고 임시로 넣음 제거 필요
  type?: 'blink' | 'flow';
}

const MyPlaceCard: React.FC<Props> = ({ type }) => {
  return (
    <MyPlaceCardWrap>
      <MyPlaceCardImageWrap>
        <Skeleton style={{ width: '100%', height: '183px' }} type={type} />
      </MyPlaceCardImageWrap>
      <MyPlaceInfoWrap>
        <Skeleton style={{ width: '50%', height: '28px' }} type={type} />
        <Skeleton style={{ width: '290px', height: '26px' }} type={type} />
        <Skeleton style={{ width: '100%', height: '48px' }} type={type} />
        <Skeleton
          style={{ width: '90px', height: '21px', marginTop: '8px' }}
          type={type}
        />
      </MyPlaceInfoWrap>
    </MyPlaceCardWrap>
  );
};
export default MyPlaceCard;
