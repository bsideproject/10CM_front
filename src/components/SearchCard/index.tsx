import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import placePlusIcon from 'assets/img/placePlusIcon.svg';
import { KakaoAddress } from 'dtos/kakao';
import Img from 'components/Img/Img';
import { sizes } from 'constants/sizes';
interface Props {
  data: KakaoAddress;
  pickedDay: number;
  onSetDaysData: (addr: KakaoAddress, dayNum: number) => void;
  onClickCard: (addressInfo: KakaoAddress) => void;
}

const SearchCard: React.FC<Props> = ({
  data,
  pickedDay,
  onSetDaysData,
  onClickCard,
}) => {
  const handleClickIcon = () => {
    onSetDaysData(data, pickedDay);
    // 숫자에 dayNum
  };
  return (
    <SearchAddressCardWrap onClick={() => onClickCard(data)}>
      <SearchAddressCardHeader>
        <SearchAddressCardTitle>
          {data.place_name}
          <SearchAddressCardCategory>
            {data.category_group_name}
          </SearchAddressCardCategory>
        </SearchAddressCardTitle>
        <Img
          src={placePlusIcon}
          width={sizes.PLUS_ICON_SIZE}
          height={sizes.PLUS_ICON_SIZE}
          onClick={handleClickIcon}
        />
      </SearchAddressCardHeader>
      <SearchAddressCardBody>
        <SearchAddressCardAddress>
          {data.road_address_name}
        </SearchAddressCardAddress>
        <SearchAddressCardZibun>{data.address_name}</SearchAddressCardZibun>
      </SearchAddressCardBody>
      <SearchAddressCardFooter>
        <div>{data.phone || '전화번호 없음'}</div>
        <a href={data.place_url} target="_blank" rel="noopener noreferrer">
          홈페이지
        </a>
      </SearchAddressCardFooter>
    </SearchAddressCardWrap>
  );
};
export default SearchCard;

const SearchAddressCardWrap = styled.div`
  padding: 22px 20px;
  letter-spacing: 0.013em;
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
