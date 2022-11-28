import KakaoAddressCard from 'components/KakaoAddressCard';
import { KakaoAddress } from 'dtos/kakao';
import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  onClick: (addressInfo: KakaoAddress) => () => void;
  addressList: KakaoAddress[];
  hasNextPage: boolean;
}

const KakaoAddressList = React.forwardRef<HTMLDivElement, Props>(
  ({ addressList, onClick, hasNextPage }, ref) => {
    return (
      <KakaoAddressListWrap>
        {addressList.map(data => {
          return (
            <KakaoAddressCard
              key={data.id}
              addressData={data}
              onClick={onClick(data)}
            />
          );
        })}
        {hasNextPage && <div ref={ref}>나 보임?</div>}
      </KakaoAddressListWrap>
    );
  },
);
export default KakaoAddressList;

const KakaoAddressListWrap = styled.div`
  height: calc(100vh - 108px);
  padding: 12px 0;
  overflow: auto;
`;
