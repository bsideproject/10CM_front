import { getPlace } from 'apis/place';
import { colors } from 'constants/colors';
import { MyPlaceResponse } from 'dtos/place';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import image from 'assets/png/detail-dummy.png';
import { fonts } from 'assets/fonts/fonts';
import { ReactComponent as CloseIcon } from 'assets/svg/close.svg';

interface Props {
  myPlaceDetail: MyPlaceResponse;
  onClose: () => void;
}

const DetailPlace: React.FC<Props> = ({ myPlaceDetail, onClose }) => {
  return (
    <MyPlaceDetailWrap>
      <CloseButton type="button" onClick={onClose}>
        <CloseIcon fill="white" />
      </CloseButton>
      {myPlaceDetail && (
        <>
          <ImageWrap>
            <Image src={image} />
          </ImageWrap>
          <MyPlaceDetailInfoWrap>
            <MyPlaceDetailTitleWrap>
              <span>여기 책</span>
              <MyPlaceDetailTitle>{myPlaceDetail.name}</MyPlaceDetailTitle>
            </MyPlaceDetailTitleWrap>
            <MyPlaceDetailAddress>{myPlaceDetail.address}</MyPlaceDetailAddress>
            <MyPlaceDetailTagWrap>
              {myPlaceDetail.tag.map(tag => tag)}
            </MyPlaceDetailTagWrap>
            <Divider />
            <MyPlaceDetailMemo>{myPlaceDetail.description}</MyPlaceDetailMemo>
          </MyPlaceDetailInfoWrap>
        </>
      )}
    </MyPlaceDetailWrap>
  );
};
export default DetailPlace;

const MyPlaceDetailWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.WHITE};
`;
const ImageWrap = styled.div`
  width: 100%;
  height: 390px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const MyPlaceDetailInfoWrap = styled.div`
  margin-top: 24px;
  text-align: center;
`;
const MyPlaceDetailTitleWrap = styled.div`
  display: inline-flex;
  align-items: center;
`;
const MyPlaceDetailTitle = styled.span`
  margin-left: 8px;
  ${fonts('title-md-bold')};
  color: ${colors.NEUTRAl_900};
`;
const MyPlaceDetailAddress = styled.div`
  margin-top: 8px;
  ${fonts('text-xs-regular')};
  color: ${colors.NEUTRAl_600};
`;
const MyPlaceDetailTagWrap = styled.div`
  ${fonts('text-xxs-regular')};
  color: ${colors.BLUE_BASE};
`;
const MyPlaceDetailMemo = styled.div`
  padding: 0 20px;
  ${fonts('text-sm-regular')};
  color: ${colors.NEUTRAl_400};
  white-space: pre-wrap;
`;
const Divider = styled.hr`
  width: 40px;
  border: 0;
  height: 1px;
  background-color: ${colors.NEUTRAl_200};
  margin: 20px auto;
`;
const CloseButton = styled.button`
  height: 40px;
  width: 40px;
  position: absolute;
  top: 32px;
  right: -40px;
  border: 0;
  outline: 0;
  z-index: 30;
  background-color: ${colors.NEUTRAl_600};
  cursor: pointer;
`;
