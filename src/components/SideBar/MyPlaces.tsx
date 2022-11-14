import Input from 'components/common/Input';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MyPlaceGroup from 'components/MyPlace/MyPlaceGroup';
import { KakaoAddress } from 'dtos/kakao';
import KakaoAddressCard from 'components/KakaoAddressCard';
import MapConfig from 'services/map-config.js';
import { createOverlay } from 'utils/overlay';
import { getPlaceList } from 'apis/place';
import { MyPlace } from 'dtos/place';
import { colors } from 'constants/colors';
import DetailPlace from 'components/MyPlace/DetailPlace';
import CreatePost from '../Modals/CreatePost';
import { SearchWrap } from './styles';

interface Props {
  map: any;
}

const MyPlaces: React.FC<Props> = ({ map }) => {
  const currentMarker = useRef<any>();
  const currentOverlay = useRef<any>();

  const [isFetching, setIsFetching] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [myPlaceList, setMyPlaceList] = useState<MyPlace[]>([]);
  const [selectedPlaceDetail, setSelectedPlaceDetail] = useState<number | null>(
    null,
  );
  const [searchAddressList, setSearchAddressList] = useState<KakaoAddress[]>(
    [],
  );
  const [selectedAddress, setSelectedAddress] = useState<KakaoAddress | null>(
    null,
  );
  // TODO 클래스나 훅으로 빼기
  const ps = new window.kakao.maps.services.Places();

  // 핸들러 함수
  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  // 닫기 버튼 클릭
  const handleCloseClick = () => {
    setIsOpenModal(false);
    setSelectedAddress(null);
  };
  // 장소 등록 후 리패치,오버레이 변경 함수
  const handleRefetchAfterCreateData = async () => {
    await fetchMyPlaces();
    setIsOpenModal(false);
  };
  // 주소 검색
  const handleSearchAddress = () => {
    ps.keywordSearch(keyword, placesSearchCB);
  };
  // 주소 카드 클릭
  const handleClickCard = (addressInfo: KakaoAddress) => {
    return () => {
      const { kakao } = window;

      if (currentMarker.current) {
        const closeOverlay = () => {
          if (currentOverlay.current) {
            currentOverlay.current.setMap(null);
          }
        };
        MapConfig.moveMarker(
          currentMarker.current,
          addressInfo.y,
          addressInfo.x,
        );
        MapConfig.moveOverlay(
          currentOverlay.current,
          addressInfo.y,
          addressInfo.x,
        );
        MapConfig.changeOverlayContent(
          currentOverlay.current,
          createOverlay(addressInfo, closeOverlay, handleCreateClick),
        );
        MapConfig.moveMap(map, addressInfo.y, addressInfo.x);
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

        currentMarker.current = marker;
        marker.setMap(map.current);
        currentOverlay.current = overlay;
        kakao.maps.event.addListener(marker, 'click', function () {
          overlay.setMap(map.current);
        });
        MapConfig.moveMap(map, addressInfo.y, addressInfo.x);
      }
    };
  };
  // 포스팅 추가하기 클릭
  const handleCreateClick = (addressInfo: KakaoAddress) => {
    setSelectedAddress(addressInfo);
  };
  // 상세보기 클릭
  const handleMyPlaceDetailClick = (id: number) => {
    setSelectedPlaceDetail(id);
  };
  // 상세보기 닫기 클릭
  const handleCloseDetailClick = () => {
    setSelectedPlaceDetail(null);
  };
  const handleKeywordClearClick = () => {
    setKeyword('');
  };
  // 내가 저장한 장소 목록 페치함수
  const fetchMyPlaces = async () => {
    setIsFetching(true);
    try {
      const data = await getPlaceList();
      setMyPlaceList(data.placeList);
    } catch (e) {
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
            handleSearchAddress();
          }}
        >
          <Input
            type="text"
            onChange={handleChangeKeyword}
            value={keyword}
            isClear
            isSearch
            onClear={handleKeywordClearClick}
          />
        </form>
      </SearchWrap>
      {keyword.length === 0 ? (
        <GroupWrap>
          <MyPlaceGroup
            placeList={myPlaceList}
            onDetailClick={handleMyPlaceDetailClick}
          />
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
        <CreatePost
          addressInfo={selectedAddress!}
          keyword={keyword}
          onClose={handleCloseClick}
          onRefetch={handleRefetchAfterCreateData}
        />
      )}
      {selectedPlaceDetail && (
        <DetailPlace
          myPlaceDetailId={selectedPlaceDetail}
          onClose={handleCloseDetailClick}
        />
      )}
    </MyPlacesWrap>
  );
};
export default MyPlaces;

const MyPlacesWrap = styled.article`
  position: relative;
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
const MyPlaceDetailWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.WHITE};
`;
