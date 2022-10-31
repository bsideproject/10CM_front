import { fonts } from 'assets/fonts/fonts';
<<<<<<< HEAD
=======
import {
  MyPlaceCardImageWrap,
  MyPlaceCardWrap,
  MyPlaceInfoWrap,
} from 'components/MyPlaceCard/styles';
>>>>>>> develop
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
<<<<<<< HEAD
        <Skeleton style={{ width: '50px', height: '28px' }} />
        <Skeleton style={{ width: '290px', height: '26px' }} />
        <Skeleton style={{ width: '150px', height: '24px' }} />
        <Skeleton
          style={{ width: '90px', height: '21px', marginTop: '12px' }}
=======
        <Skeleton style={{ width: '50%', height: '28px' }} type={type} />
        <Skeleton style={{ width: '290px', height: '26px' }} type={type} />
        <Skeleton style={{ width: '100%', height: '48px' }} type={type} />
        <Skeleton
          style={{ width: '90px', height: '21px', marginTop: '8px' }}
          type={type}
>>>>>>> develop
        />
      </MyPlaceInfoWrap>
    </MyPlaceCardWrap>
  );
};
export default MyPlaceCard;
<<<<<<< HEAD

const MyPlaceCardWrap = styled.article`
  width: 350px;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
`;
const MyPlaceCardImageWrap = styled.div``;
const MyPlaceInfoWrap = styled.div`
  padding: 12px;
`;
// const MyPlaceName = styled.div`
//   ${fonts('text-sm-bold')};
// `;
// const MyPlaceAddress = styled.div`
//   ${fonts('text-xs-regular')};
// `;
// const MyPlaceHashTag = styled.div`
//   ${fonts('text-xxs-regular')};
// `;
// const MyPlaceDate = styled.div`
//   ${fonts('caption')};
// `;
=======
>>>>>>> develop
