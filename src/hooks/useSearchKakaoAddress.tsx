import { KakaoAddress } from 'dtos/kakao';
import { useState } from 'react';

const useSearchKakaoAddress = () => {
  const [addressList, setAddressList] = useState<KakaoAddress[]>([]);
  const [hasKakaoAddressNextPage, setHasKakaoAddressNextPage] = useState(false);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const kakao = new window.kakao.maps.services.Places();

  const handleSearchAddress = (keyword: string) => {
    kakao.keywordSearch(keyword, placesSearchCB, { page: 1 });
    setKeyword(keyword);
  };
  const placesSearchCB = (data: any, status: any, paginationData: any) => {
    setHasKakaoAddressNextPage(false);
    if (status === window.kakao.maps.services.Status.OK) {
      if (paginationData.current === 1) {
        setAddressList(data);
      } else {
        setAddressList(prev => prev.concat(data));
      }
      if (paginationData.hasNextPage) {
        setHasKakaoAddressNextPage(paginationData.hasNextPage);
        setPage(paginationData.current + 1);
      }
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
    }
  };
  const getKakaoAddressNextPage = () => {
    kakao.keywordSearch(keyword, placesSearchCB, { page });
  };
  return {
    addressList,
    handleSearchAddress,
    hasKakaoAddressNextPage,
    getKakaoAddressNextPage,
  };
};
export default useSearchKakaoAddress;
