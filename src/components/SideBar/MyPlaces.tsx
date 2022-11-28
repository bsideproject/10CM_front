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
import useMyPlaceListByTag from 'hooks/useMyPlaceListByTag';
import MyPlaceListByTag from 'components/MyPlace/MyPlaceListByTag';
import CreatePost from '../Modals/CreatePost';
import { SearchWrap } from './styles';

interface Props {
  map: any;
}

const MyPlaces: React.FC<Props> = ({ map }) => {
  const currentMarker = useRef<any>();
  const currentOverlay = useRef<any>();

  // 카카오주소
  const {
    handleSearchAddress,
    addressList,
    hasKakaoAddressNextPage,
    getKakaoAddressNextPage,
  } = useSearchKakaoAddress();
  // 목록
  const {
    myPlaceList,
    handleChangeSort,
    reFetchMyPlaceList,
    hasMyPlaceNextPage,
    getMyPlaceListNextPage,
    isMyListFetching,
    currentSort,
  } = useMyPlaceList();
  // 태그
  const [currentTag, setCurrentTag] = useState<string | null>(null);
  const {
    myPlaceListByTag,
    reFetchMyPlaceListByTag,
    hasMyPlaceListByTagNextPage,
    getMyPlaceListByTagNextPage,
    isMyPlaceListByTagFetching,
  } = useMyPlaceListByTag(currentTag);

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
  // 태그로 목록 불러오기
  const myPlaceListByTagCallback: IntersectionObserverCallback = entries => {
    entries.forEach(el => {
      if (el.target === tagListRef.current && el.isIntersecting) {
        getMyPlaceListByTagNextPage();
      }
    });
  };

  const { ref: tagListRef } = useInterSectionObserver(myPlaceListByTagCallback);

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  const [placeDetail, setPlaceDetail] = useState<MyPlaceResponse | null>(null);
  const [createdPlace, setCreatePlace] = useState<MyPlaceResponse | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<KakaoAddress | null>(
    null,
  );

  // 장소 등록 후 리패치,오버레이 변경 함수
  const refetchAfterCreateData = async (info: MyPlaceResponse) => {
    await reFetchMyPlaceList();
    setIsOpenCreateModal(false);
    setCreatePlace(info);
  };
  // 상세정보 refetch
  const refetchAfterUpdateData = async () => {
    if (placeDetail) {
      try {
        const data = await getPlace(placeDetail.id);
        await reFetchMyPlaceList();
        setPlaceDetail({ ...data });
        if (currentTag) {
          await reFetchMyPlaceListByTag();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  // 핸들러 함수
  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  // 닫기 버튼 클릭
  const handleCloseCreateModalClick = () => {
    setIsOpenCreateModal(false);
    setSelectedAddress(null);
  };
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
  const handleMyPlaceDetailClick = (addressInfo: MyPlaceResponse) => {
    setPlaceDetail(addressInfo);
    setIsOpenDetailModal(true);
  };
  // 상세보기 닫기 클릭
  const handleCloseDetailClick = () => {
    setPlaceDetail(null);
    setIsOpenDetailModal(false);
  };
  // 나의 관심장소 카드 클릭
  const handleClickMyPlaceCard = (placeInfo: MyPlaceResponse) => {
    const { kakao } = window;
    if (currentMarker.current) {
      MapConfig.moveMarker(
        currentMarker.current,
        placeInfo.latitude,
        placeInfo.longitude,
      );
      MapConfig.moveOverlay(
        currentOverlay.current,
        placeInfo.latitude,
        placeInfo.longitude,
      );
      MapConfig.changeOverlayContent(
        currentOverlay.current,
        createUpdateOverlay(
          placeInfo,
          handleOverayOverlayClose,
          handleClickUpdateClick,
        ),
      );
      MapConfig.moveMap(map, placeInfo.latitude, placeInfo.longitude);
    } else {
      const marker = MapConfig.createMarker(
        kakao,
        placeInfo.latitude,
        placeInfo.longitude,
      );
      const closeOverlay = () => {
        overlay.setMap(null);
      };
      const overlay = new kakao.maps.CustomOverlay({
        content: createUpdateOverlay(
          placeInfo,
          closeOverlay,
          handleClickUpdateClick,
        ),
        map: map.current,
        position: marker.getPosition(),
      });
      currentMarker.current = marker;
      marker.setMap(map.current);
      currentOverlay.current = overlay;
      kakao.maps.event.addListener(marker, 'click', function () {});
      MapConfig.moveMap(map, placeInfo.latitude, placeInfo.longitude);
    }
    currentOverlay.current.setMap(map.current);
    setPlaceDetail(placeInfo);
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
  // 태그 클릭
  const handleTagNameClick = (tagName: string) => {
    setCurrentTag(tagName);
  };
  // 태그 검색창 닫기
  const handleTagNameCloseClick = () => {
    setCurrentTag(null);
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
          hasNextPage={hasMyPlaceNextPage}
          isLoading={isMyListFetching}
          currentPlace={placeDetail}
          currentSort={currentSort}
          onChangeSort={handleChangeSort}
          onDetailClick={handleMyPlaceDetailClick}
          onCardClick={handleClickMyPlaceCard}
          onReFetch={reFetchMyPlaceList}
          onTagClick={handleTagNameClick}
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
          onCreateComplete={refetchAfterCreateData}
        />
      )}
      {isOpenUpdateModal && placeDetail && (
        <UpdatePost
          addressInfo={placeDetail}
          onClose={handleCloseUpdateModalClick}
          onUpdateComplete={refetchAfterUpdateData}
        />
      )}
      {isOpenDetailModal && placeDetail && (
        <DetailPlace
          myPlaceDetail={placeDetail}
          onClose={handleCloseDetailClick}
        />
      )}
      {currentTag && (
        <MyPlaceListByTag
          ref={tagListRef}
          placeList={myPlaceListByTag}
          hasNextPage={hasMyPlaceListByTagNextPage}
          isLoading={isMyPlaceListByTagFetching}
          currentTag={currentTag}
          currentPlace={placeDetail}
          onCancel={handleTagNameCloseClick}
          onCardClick={handleClickMyPlaceCard}
          onTagClick={handleTagNameClick}
          onDetailClick={handleMyPlaceDetailClick}
          onReFetch={reFetchMyPlaceListByTag}
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
