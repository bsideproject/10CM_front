import { fonts } from 'assets/fonts/fonts';
import Input from 'components/common/Input';
import { colors } from 'constants/colors';
import React, { useState, useRef, KeyboardEvent } from 'react';
import styled, { css } from 'styled-components';
import SearchAddressCard from 'components/SearchCard';
import MapConfig from 'services/map-config.js';
import { createDndElement } from 'utils/overlay';
import MyPlaceGroup from 'components/CreateTrip/MyPlaceGroup';

import useEnteredInfo from 'hooks/useEnteredInfo';
import { KakaoAddress } from 'dtos/kakao';
import { SearchWrap } from './styles';
import SearchAddressNav from './SearchAddr/SearchAddressNav';
import SearchCardGroup from './SearchAddr/SearchCardGroup';
interface Props {
  map?: any;
  pickedDay: number;
  onSetDaysData: (addr: KakaoAddress, dayNum: number) => void;
}

type SelectedType = 'search' | 'myPlace';

const SearchAddress: React.FC<Props> = ({ map, pickedDay, onSetDaysData }) => {
  const [selectedMenu, setSelectedMenu] = useState<SelectedType>('search');
  const [searchValue, onChangeSearchValue] = useEnteredInfo('');
  const [searchedData, setSearchedData] = useState<KakaoAddress[]>([]);

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

  // dnd 추가하기
  const handlePushDndElement = (addressInfo: KakaoAddress) => {
    onSetDaysData(addressInfo, pickedDay);
    // setSelectedAddress(addressInfo);
  };

  const handleClickCard = (addressInfo: KakaoAddress) => {
    console.log(currentMarker.current);
    const { kakao } = window;

    if (currentMarker.current) {
      MapConfig.moveMarker(currentMarker.current, addressInfo.y, addressInfo.x);
      MapConfig.moveOverlay(
        currentOverlay.current,
        addressInfo.y,
        addressInfo.x,
      );
      MapConfig.changeOverlayContent(
        currentOverlay.current,
        createDndElement(
          addressInfo,
          handleOverayOverlayClose,
          handlePushDndElement,
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
        content: createDndElement(
          addressInfo,
          closeOverlay,
          handlePushDndElement,
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
      MapConfig.moveMap(map, addressInfo.y, addressInfo.x);
    }
    currentOverlay.current.setMap(map.current);
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
          pickedDay={pickedDay}
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
