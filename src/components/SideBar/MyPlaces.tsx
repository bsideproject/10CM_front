import Input from 'components/common/Input';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MyPlaceGroup from 'components/MyPlace/MyPlaceGroup';
import { KakaoAddress } from 'dtos/kakao';
import MapConfig from 'services/map-config.js';
import { createAddressDetailOverlay, createUpdateOverlay } from 'utils/overlay';
import { getPlace } from 'apis/place';
import { MyPlaceResponse } from 'dtos/place';
import DetailPlace from 'components/MyPlace/DetailPlace';
import UpdatePost from 'components/Modals/UpdatePost';
import useInterSectionObserver from 'hooks/useInterSectionOpserver';
import KakaoAddressList from 'components/MyPlace/KakaoAddressList';
import useSearchKakaoAddress from 'hooks/useSearchKakaoAddress';
import useMyPlaceList from 'hooks/useMyPlaceList';
import CreatePost from '../Modals/CreatePost';
import { SearchWrap } from './styles';

interface Props {
  map: any;
}

const MyPlaces: React.FC<Props> = ({ map }) => {
  const currentMarker = useRef<any>();
  const currentOverlay = useRef<any>();

  const {
    handleSearchAddress,
    addressList,
    hasKakaoAddressNextPage,
    getKakaoAddressNextPage,
  } = useSearchKakaoAddress();
  const {
    myPlaceList,
    handleChangeSort,
    reFetchMyPlaceList,
    hasMyPlaceNextPage,
    getMyPlaceListNextPage,
    isMyListFetching,
    currentSort,
  } = useMyPlaceList();

  // 내가 저장한 장소 목록
  const myPlaceListObserverCallback: IntersectionObserverCallback = entries => {
    entries.forEach(el => {
      if (el.target === myListRef.current && el.isIntersecting) {
        getMyPlaceListNextPage();
      }
    });
  };
  const { ref: myListRef } = useInterSectionObserver(
    myPlaceListObserverCallback,
  );

  // 카카오 주소검색
  const kakaoSearchObserverCallback: IntersectionObserverCallback = entries => {
    entries.forEach(el => {
      if (el.target === kakaoSearchRef.current && el.isIntersecting) {
        getKakaoAddressNextPage();
      }
    });
  };
  const { ref: kakaoSearchRef } = useInterSectionObserver(
    kakaoSearchObserverCallback,
  );

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [placeDetail, setPlaceDetail] = useState<MyPlaceResponse | null>(null);
  const [createdPlace, setCreatePlace] = useState<MyPlaceResponse | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<KakaoAddress | null>(
    null,
  );

  // 핸들러 함수
  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  // 닫기 버튼 클릭
  const handleCloseCreateModalClick = () => {
    setIsOpenCreateModal(false);
    setSelectedAddress(null);
  };
  // 장소 등록 후 리패치,오버레이 변경 함수
  const handleRefetchAfterCreateData = async (info: MyPlaceResponse) => {
    await reFetchMyPlaceList();
    setIsOpenCreateModal(false);
    setCreatePlace(info);
  };
  // 주소 검색
  // const handleSearchAddress = () => {
  //   ps.keywordSearch(keyword, placesSearchCB);
  // };
  // 주소 카드 클릭
  const handleOverayOverlayClose = () => {
    if (currentOverlay.current) {
      currentOverlay.current.setMap(null);
    }
  };
  // 포스팅 추가하기 클릭
  const handleCreateClick = (addressInfo: KakaoAddress) => {
    setSelectedAddress(addressInfo);
  };
  // 상세보기 클릭
  const handleMyPlaceDetailClick = async (id: number) => {
    setIsDetailLoading(true);
    try {
      const data = await getPlace(id);
      setPlaceDetail(data);
    } catch (e) {
      console.log(e);
    }
    setIsDetailLoading(false);
  };
  // 상세보기 닫기 클릭
  const handleCloseDetailClick = () => {
    setPlaceDetail(null);
  };
  // 포스팅 수정 버튼 클릭
  const handleClickUpdateClick = () => {
    setIsOpenUpdateModal(true);
  };
  // 포스팅 수정 모달 닫기
  const handleCloseUpdateModalClick = () => {
    setIsOpenUpdateModal(false);
  };
  // 검색 내용 초기화 클릭
  const handleKeywordClearClick = () => {
    setKeyword('');
  };
  // 카카오 주소검색 결과 클릭 시
  const handleClickCard = (addressInfo: KakaoAddress) => {
    return () => {
      const { kakao } = window;

      if (currentMarker.current) {
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
          createAddressDetailOverlay(
            addressInfo,
            handleOverayOverlayClose,
            handleCreateClick,
          ),
        );
        MapConfig.moveMap(map, addressInfo.y, addressInfo.x);
      } else {
        const marker = MapConfig.createMarker(
          kakao,
          addressInfo.y,
          addressInfo.x,
        );
        const closeOverlay = () => {
          overlay.setMap(null);
        };
        const overlay = new kakao.maps.CustomOverlay({
          content: createAddressDetailOverlay(
            addressInfo,
            closeOverlay,
            handleCreateClick,
          ),
          map: map.current,
          position: marker.getPosition(),
          clickable: true,
        });

        currentMarker.current = marker;
        marker.setMap(map.current);
        currentOverlay.current = overlay;
        kakao.maps.event.addListener(marker, 'click', function () {
          overlay.setMap(map.current);
        });
        MapConfig.moveMap(map, addressInfo.y, addressInfo.x);
      }
      currentOverlay.current.setMap(map.current);
    };
  };
  // 내가 저장한 장소 목록 페치함수

  // 선택한 장소 등록 모달
  useEffect(() => {
    if (selectedAddress) {
      setIsOpenCreateModal(true);
    }
  }, [selectedAddress]);
  // 장소 생성했을 때
  useEffect(() => {
    if (createdPlace) {
      MapConfig.changeOverlayContent(
        currentOverlay.current,
        createUpdateOverlay(createdPlace, handleOverayOverlayClose, () => {}),
      );
    }
  }, [createdPlace]);
  // 내가 저장한 장소 상세보기
  useEffect(() => {
    if (placeDetail) {
      const { kakao } = window;

      if (currentMarker.current) {
        MapConfig.moveMarker(
          currentMarker.current,
          placeDetail.latitude,
          placeDetail.longitude,
        );
        MapConfig.moveOverlay(
          currentOverlay.current,
          placeDetail.latitude,
          placeDetail.longitude,
        );
        MapConfig.changeOverlayContent(
          currentOverlay.current,
          createUpdateOverlay(
            placeDetail,
            handleOverayOverlayClose,
            handleClickUpdateClick,
          ),
        );
        MapConfig.moveMap(map, placeDetail.latitude, placeDetail.longitude);
      } else {
        const marker = MapConfig.createMarker(
          kakao,
          placeDetail.latitude,
          placeDetail.longitude,
        );
        const closeOverlay = () => {
          overlay.setMap(null);
        };
        const overlay = new kakao.maps.CustomOverlay({
          content: createUpdateOverlay(
            placeDetail,
            closeOverlay,
            handleClickUpdateClick,
          ),
          map: map.current,
          position: marker.getPosition(),
        });

        currentMarker.current = marker;
        marker.setMap(map.current);
        currentOverlay.current = overlay;
        kakao.maps.event.addListener(marker, 'click', function () {
          overlay.setMap(map.current);
        });
        MapConfig.moveMap(map, placeDetail.latitude, placeDetail.longitude);
      }
      currentOverlay.current.setMap(map.current);
    }
  }, [placeDetail]);

  return (
    <MyPlacesWrap>
      <SearchWrap>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSearchAddress(keyword);
          }}
        >
          <Input
            type="text"
            onChange={handleChangeKeyword}
            value={keyword}
            isClear
            isSearch
            onClear={handleKeywordClearClick}
            placeholder="장소 검색"
          />
        </form>
      </SearchWrap>
      {keyword.length === 0 ? (
        <MyPlaceGroup
          ref={myListRef}
          placeList={myPlaceList}
          onDetailClick={handleMyPlaceDetailClick}
          hasNextPage={hasMyPlaceNextPage}
          isLoading={isMyListFetching}
          onChangeSort={handleChangeSort}
          currentSort={currentSort}
        />
      ) : (
        <KakaoAddressList
          ref={kakaoSearchRef}
          addressList={addressList}
          onClick={handleClickCard}
          hasNextPage={hasKakaoAddressNextPage}
        />
      )}
      {isOpenCreateModal && (
        <CreatePost
          addressInfo={selectedAddress!}
          keyword={keyword}
          onClose={handleCloseCreateModalClick}
          onCreateComplete={handleRefetchAfterCreateData}
        />
      )}
      {isOpenUpdateModal && placeDetail && (
        <UpdatePost
          addressInfo={placeDetail}
          onClose={handleCloseUpdateModalClick}
        />
      )}
      {placeDetail && (
        <DetailPlace
          myPlaceDetail={placeDetail}
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
