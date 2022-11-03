import Input from 'components/common/Input';
import React, { useState } from 'react';
import styled from 'styled-components';
import MyPlaceGroup from 'components/MyPlace/MyPlaceGroup';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import { KeywordAddress } from 'dtos/kakao';
import KakaoAddressCard from 'components/KakaoAddressCard';
import { SearchWrap } from './styles';

interface Props {}

const MyPlaces: React.FC<Props> = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchAddressList, setSearchAddressList] = useState<KeywordAddress[]>(
    [],
  );
  const ps = new window.kakao.maps.services.Places();

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const searchAddress = () => {
    ps.keywordSearch(keyword, placesSearchCB);
  };

  const placesSearchCB = (data: any, status: any, pagination: any) => {
    console.log(data, status, pagination);
    if (status === window.kakao.maps.services.Status.OK) {
      setSearchAddressList(data);
      // 정상적으로 검색이 완료됐으면
      // 검색 목록과 마커를 표출합니다
      // displayPlaces(data);

      // // 페이지 번호를 표출합니다
      // displayPagination(pagination);
      // console.log(data);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
    }
  };
  return (
    <MyPlacesWrap>
      <SearchWrap>
        <form
          onSubmit={e => {
            e.preventDefault();
            searchAddress();
          }}
        >
          <Input type="text" onChange={handleChangeKeyword} />
        </form>
      </SearchWrap>
      {searchAddressList.length === 0 ? (
        <GroupWrap>
          <MyPlaceGroup />
        </GroupWrap>
      ) : (
        <KakaoAddressListWrap>
          {searchAddressList.map(data => {
            return <KakaoAddressCard addressData={data} />;
          })}
        </KakaoAddressListWrap>
      )}
    </MyPlacesWrap>
  );
};
export default MyPlaces;

const MyPlacesWrap = styled.article`
  width: 390px;
`;
const GroupWrap = styled.div`
  height: calc(100vh - 96px);
`;
const KakaoAddressListWrap = styled.div`
  height: calc(100vh - 108px);
  padding: 12px 0;
  overflow: auto;
`;
