import Img from 'components/Img/Img';
import React from 'react';
import styled from 'styled-components';
import emptyImg from 'assets/img/emptyContent.svg';
import { sizes } from 'constants/sizes';
import Button from 'components/common/Button';
const EmptyContent = () => {
  return (
    <Wrap>
      <Img
        src={emptyImg}
        width={sizes.EMPTY_IMG_SIZE}
        height={sizes.EMPTY_IMG_SIZE}
      />
      <p>{'추가된 장소가 없습니다.\n지도에서 장소를 추가해주세요.'}</p>
      <Button>여행 만들기</Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  display; flex;
  flex-direction: column;
  padding: 39px 0;
  gap: 16px;
  white-space: pre-wrap;
`;

export default EmptyContent;
