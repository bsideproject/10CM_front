import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import { KakaoAddress } from 'dtos/kakao';
import React from 'react';
import styled from 'styled-components';

interface Props {
  addressData: KakaoAddress;
  onClick: () => void;
}

const KakaoAddressCard: React.FC<Props> = ({ addressData, onClick }) => {
  return (
    <KakaoAddressWrap onClick={onClick}>
      <KakaoAddressHeader>
        <KakaoAddressName>{addressData.place_name}</KakaoAddressName>
        <KakaoAddressCategory>{addressData.category_name}</KakaoAddressCategory>
      </KakaoAddressHeader>
      <KakaoAddressBody>
        <KakaoAddressStreet>{addressData.road_address_name}</KakaoAddressStreet>
        <KakaoAddressZibun>{addressData.address_name}</KakaoAddressZibun>
      </KakaoAddressBody>
      <KakaoAddressFooter>
        <KakaoAddressTel>
          {addressData.phone || '전화번호 없음'}
        </KakaoAddressTel>
        <a
          href={addressData.place_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          홈페이지
        </a>
      </KakaoAddressFooter>
    </KakaoAddressWrap>
  );
};
export default KakaoAddressCard;

const KakaoAddressWrap = styled.div`
  padding: 20px;
  &:hover {
    background-color: ${colors.NEUTRAl_50};
  }
`;
const KakaoAddressHeader = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const KakaoAddressName = styled.span`
  ${fonts('text-ms-medium')};
  color: ${colors.NEUTRAl_900};
`;
const KakaoAddressCategory = styled.span`
  margin-left: 8px;
  ${fonts('text-ms-medium')};
  color: ${colors.NEUTRAl_300};
`;
const KakaoAddressBody = styled.div`
  margin-top: 4px;
`;
const KakaoAddressStreet = styled.div`
  ${fonts('text-xxs-regular')};
  color: ${colors.NEUTRAl_500};
`;
const KakaoAddressZibun = styled.div`
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
`;
const KakaoAddressFooter = styled.div`
  margin-top: 16px;
  display: flex;
`;
const KakaoAddressTel = styled.div`
  width: 124px;
  margin-right: 12px;
`;
