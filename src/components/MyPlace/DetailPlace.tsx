import React from 'react';
import styled from 'styled-components';
import Image from '../../assets/png/thumbnail-area.png';

interface Props {}

const DetailPlace: React.FC<Props> = () => {
  return (
    <DetailPlaceWrap>
      <ImageWrap>
        <img src={Image} alt="더미" width="100%" />
      </ImageWrap>
    </DetailPlaceWrap>
  );
};
export default DetailPlace;

const DetailPlaceWrap = styled.div`
  position: absolute;
  height: 100vh;
  width: 390px;
`;
const ImageWrap = styled.div`
  height: 390px;
`;
