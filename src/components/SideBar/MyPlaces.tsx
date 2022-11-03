import Input from 'components/common/Input';
import React, { useState } from 'react';
import styled from 'styled-components';
import MyPlaceGroup from 'components/MyPlace/MyPlaceGroup';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import { SearchWrap } from './styles';

interface Props {}

const MyPlaces: React.FC<Props> = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchAddressList, setSearchAddressList] = useState([]);
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
        <KakaoAddressWrap>
          <KakaoAddressHeader>
            <KakaoAddressName>타이틀</KakaoAddressName>
            <KakaoAddressCategory>카테고리</KakaoAddressCategory>
          </KakaoAddressHeader>
          <KakaoAddressBody>
            <KakaoAddressStreet>주소</KakaoAddressStreet>
            <KakaoAddressZibun>추가주소</KakaoAddressZibun>
          </KakaoAddressBody>
          <KakaoAddressFooter>
            <KakaoAddressTel>010101010</KakaoAddressTel>
            <a href="#!" rel="noopener noreferrer" target="_blank">
              홈페이지
            </a>
          </KakaoAddressFooter>
        </KakaoAddressWrap>
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

const KakaoAddressWrap = styled.div`
  padding: 20px;
  &:hover {
    background-color: ${colors.NEUTRAl_50};
  }
`;
const KakaoAddressHeader = styled.div`
  display: flex;
`;
const KakaoAddressName = styled.div`
  ${fonts('text-ms-medium')};
  color: ${colors.NEUTRAl_900};
`;
const KakaoAddressCategory = styled.div`
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
