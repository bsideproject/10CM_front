import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'assets/svg/arrow-forward.svg';
import Input, { InputProps } from '.';

interface Props extends InputProps {
  onAddressChange: (data: ChangeAddressDataFromKakao) => void;
}

export interface ChangeAddressDataFromKakao {
  address: string;
  latitude: string;
  longitude: string;
}

interface KakaoSearchAddress {
  address: '서울 영등포구 문래북로 31';
  roadAddress: '서울 영등포구 문래북로 31';
}

const ChangeAddress: React.FC<Props> = ({ onAddressChange, value }) => {
  const handleChangeAddressClick = () => {
    new window.daum.Postcode({
      oncomplete(data: KakaoSearchAddress) {
        const { kakao } = window;
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(data.address, (result: any, status: any) => {
          if (status === kakao.maps.services.Status.OK) {
            const searchAddress: ChangeAddressDataFromKakao = {
              address: data.roadAddress || data.address,
              latitude: result[0].y,
              longitude: result[0].x,
            };
            onAddressChange(searchAddress);
          }
        });
      },
    }).open();
  };

  return (
    <ChangeAddressWrap>
      <Input readOnly value={value} />
      <ArrowButton onClick={handleChangeAddressClick} />
    </ChangeAddressWrap>
  );
};
export default ChangeAddress;

const ChangeAddressWrap = styled.div`
  position: relative;
`;
const ArrowButton = styled(ArrowIcon)`
  position: absolute;
  fill: black;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  cursor: pointer;
`;
