import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AddressAddIcon } from '../../assets/svg/address-add.svg';

interface Props {}

const SearchAddressCard: React.FC<Props> = () => {
  return (
    <SearchAddressCardWrap>
      <SearchAddressCardHeader>
        <SearchAddressCardTitle>
          경복궁
          <SearchAddressCardCategory>장소 구분</SearchAddressCardCategory>
        </SearchAddressCardTitle>
        <AddressAddIcon style={{ cursor: 'pointer' }} />
      </SearchAddressCardHeader>
      <SearchAddressCardBody>
        <SearchAddressCardAddress>
          제주특별자치도 제주시 구좌읍 월정리 33-3{' '}
        </SearchAddressCardAddress>
        <SearchAddressCardZibun>(지번) 이태원동 181-8</SearchAddressCardZibun>
      </SearchAddressCardBody>
      <SearchAddressCardFooter>
        <div>000-0000-0000</div>
        <a href="https://www.naver.com/" target="_blank">
          홈페이지
        </a>
      </SearchAddressCardFooter>
    </SearchAddressCardWrap>
  );
};
export default SearchAddressCard;

const SearchAddressCardWrap = styled.div`
  padding: 22px 20px;
`;
const SearchAddressCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 8px;
  padding: 2px 0;
  align-items: center;
`;
const SearchAddressCardTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.NEUTRAl_900};
  ${fonts('text-xs-regular')};
`;
const SearchAddressCardCategory = styled.span`
  margin-left: 8px;
  color: ${colors.NEUTRAl_300};
  ${fonts('text-xs-regular')};
`;
const SearchAddressCardBody = styled.div`
  margin-top: 4px;
`;
const SearchAddressCardAddress = styled.div`
  ${fonts('text-xxs-regular')};
  ${colors.NEUTRAl_500};
`;
const SearchAddressCardZibun = styled.div`
  ${fonts('caption')};
  ${colors.NEUTRAl_400};
`;
const SearchAddressCardFooter = styled.div`
  display: flex;
  margin-top: 16px;
  a {
    margin-left: 12px;
    text-decoration: none;
    color: ${colors.BLUE_BASE};
  }
  a:link {
    color: ${colors.BLUE_BASE};
  }
  a:visited {
    color: ${colors.BLUE_BASE};
  }
`;
