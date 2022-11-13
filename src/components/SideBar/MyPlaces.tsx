import Input from 'components/common/Input';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MyPlaceGroup from 'components/MyPlace/MyPlaceGroup';
import { KakaoAddress } from 'dtos/kakao';
import KakaoAddressCard from 'components/KakaoAddressCard';
import MapConfig from 'services/map-config.js';
import { createOverlay } from 'utils/overlay';
import { getPlaces } from 'apis/place';
import { MyPlace } from 'dtos/place';
import CreatePost from '../Modals/CreatePost';
import { SearchWrap } from './styles';

interface Props {
  map: any;
}

const MyPlaces: React.FC<Props> = ({ map }) => {
  let currentMarker: any | undefined;
  let currentOverlay: any | undefined;

  const [isFetching, setIsFetching] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [myPlaceList, setMyPlaceList] = useState<MyPlace[]>([]);
  const [searchAddressList, setSearchAddressList] = useState<KakaoAddress[]>(
    [],
  );
  const [selectedAddress, setSelectedAddress] = useState<KakaoAddress | null>(
    null,
  );
  // TODO 클래스나 훅으로 빼기
  const ps = new window.kakao.maps.services.Places();

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleCloseClick = () => {
    setIsOpenModal(false);
    setSelectedAddress(null);
  };
  const searchAddress = () => {
    ps.keywordSearch(keyword, placesSearchCB);
  };
  const handleClickCard = (addressInfo: KakaoAddress) => {
    return () => {
      const { kakao } = window;

      if (currentMarker) {
        const closeOverlay = () => {
          currentOverlay.setMap(null);
        };
        console.log(addressInfo);
        console.log(currentOverlay);
        MapConfig.moveMarker(currentMarker, addressInfo.y, addressInfo.x);
        MapConfig.moveOverlay(currentOverlay, addressInfo.y, addressInfo.x);
        MapConfig.changeOverlayContent(
          currentOverlay,
          createOverlay(addressInfo, closeOverlay, handleCreateClick),
        );
      } else {
        const marker = MapConfig.createMarker(
          kakao,
          addressInfo.x,
          addressInfo.y,
        );
        const closeOverlay = () => {
          overlay.setMap(null);
        };
        const overlay = new kakao.maps.CustomOverlay({
          content: createOverlay(addressInfo, closeOverlay, handleCreateClick),
          map: map.current,
          position: marker.getPosition(),
        });

        currentMarker = marker;
        marker.setMap(map.current);
        currentOverlay = overlay;
        kakao.maps.event.addListener(marker, 'click', function () {
          overlay.setMap(map.current);
        });
      }
    };
  };
  const handleCreateClick = (addressInfo: KakaoAddress) => {
    setSelectedAddress(addressInfo);
  };
  const fetchMyPlaces = async () => {
    setIsFetching(true);
    try {
      const data = await getPlaces();
      console.log('data', data.placeList);
      setMyPlaceList(data.placeList);
    } catch (e) {
      setIsFetching(false);
      console.log(e);
    }
    setIsFetching(false);
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

  // 선택한 장소 등록 모달
  useEffect(() => {
    if (selectedAddress) {
      setIsOpenModal(true);
    }
  }, [selectedAddress]);

  // 첫 렌더링 시 초기 저장된 장소 목록
  useEffect(() => {
    fetchMyPlaces();
  }, []);

  return (
    <MyPlacesWrap>
      <SearchWrap>
        <form
          onSubmit={e => {
            e.preventDefault();
            searchAddress();
          }}
        >
          <Input type="text" onChange={handleChangeKeyword} value={keyword} />
        </form>
      </SearchWrap>
      {searchAddressList.length === 0 ? (
        <GroupWrap>
          <MyPlaceGroup placeList={myPlaceList} />
        </GroupWrap>
      ) : (
        <KakaoAddressListWrap>
          {searchAddressList.map(data => {
            return (
              <KakaoAddressCard
                key={data.id}
                addressData={data}
                onClick={handleClickCard(data)}
              />
            );
          })}
        </KakaoAddressListWrap>
      )}
      {isOpenModal && (
        <CreatePost addressInfo={selectedAddress!} onClose={handleCloseClick} />
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
