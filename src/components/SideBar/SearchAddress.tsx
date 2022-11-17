import { fonts } from 'assets/fonts/fonts';
import Input from 'components/common/Input';
import { colors } from 'constants/colors';
import React, { useState, useRef, KeyboardEvent } from 'react';
import styled, { css } from 'styled-components';
import SearchAddressCard from 'components/SearchCard';
import MapConfig from 'services/map-config.js';
import { createOverlay } from 'utils/overlay';
import MyPlaceGroup from 'components/CreateTrip/MyPlaceGroup';
import useEnteredInfo from 'components/hook/useEnteredInfo';
import { AddrT } from 'types/dtos/address';

import { KakaoAddress } from 'dtos/kakao';
import { SearchWrap } from './styles';
import SearchAddressNav from './SearchAddr/SearchAddressNav';
import SearchCardGroup from './SearchAddr/SearchCardGroup';
interface Props {
  map?: any;
  onSetDaysData: (addr: AddrT, dayNum: number) => void;
}

type SelectedType = 'search' | 'myPlace';

const SearchAddress: React.FC<Props> = ({ map, onSetDaysData }) => {
  const [selectedMenu, setSelectedMenu] = useState<SelectedType>('search');
  const [searchValue, onChangeSearchValue] = useEnteredInfo('');
  const [searchedData, setSearchedData] = useState<AddrT[]>([]);
  const currentMarker = useRef<any>();
  const currentOverlay = useRef<any>();

  const handleChangeMenu = (menu: SelectedType) => {
    setSelectedMenu(menu);
  };

  const ps = new window.kakao.maps.services.Places();

  const placesSearchCB = (data: KakaoAddress[], status: string) => {
    // pagination 생략
    const wStatus = window.kakao.maps.services.Status;
    if (status === wStatus.OK) {
      setSearchedData(data);
      console.log(data);
    } else if (status === wStatus.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === wStatus.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
    }
  };

  const handleSearchAddress = () => {
    ps.keywordSearch(searchValue, placesSearchCB);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchAddress();
    }
  };

  // 주소 카드 클릭
  const handleOverayOverlayClose = () => {
    if (currentOverlay.current) {
      currentOverlay.current.setMap(null);
    }
  };

  // 포스팅 추가하기 클릭
  const handleCreateClick = (addressInfo: KakaoAddress) => {
    //
  };

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
          createOverlay(
            addressInfo,
            handleOverayOverlayClose,
            handleCreateClick,
          ),
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

  return (
    <SearchAddressWrap>
      <SearchWrap>
        <Input
          placeholder="장소 검색"
          isSearch
          value={searchValue}
          onChange={onChangeSearchValue}
          onKeyPress={handleKeyPress}
        />
      </SearchWrap>
      <SearchAddressNav
        selectedMenu={selectedMenu}
        onChangeMenu={handleChangeMenu}
      />
      {selectedMenu === 'myPlace' ? (
        <GroupWrap>
          <MyPlaceGroup />
        </GroupWrap>
      ) : (
        <SearchCardGroup
          addrList={searchedData}
          onSetDaysData={onSetDaysData}
          onClickCard={handleClickCard}
        />
      )}
    </SearchAddressWrap>
  );
};
export default SearchAddress;

const SearchAddressWrap = styled.div`
  width: 390px;
`;

const GroupWrap = styled.div`
  height: calc(100vh - 154px);
`;
