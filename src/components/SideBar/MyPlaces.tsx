import Input from 'components/common/Input';
import React, { useState } from 'react';
import styled from 'styled-components';
import MyPlaceGroup from 'components/MyPlace/MyPlaceGroup';
import { KakaoAddress } from 'dtos/kakao';
import KakaoAddressCard from 'components/KakaoAddressCard';
import MapConfig from 'services/map-config.js';
import { SearchWrap } from './styles';
import CloseIcon from '../../assets/svg/overay-close.svg';
import PinIcon from '../../assets/svg/overay-pin.svg';

interface Props {
  map: any;
}

const MyPlaces: React.FC<Props> = ({ map }) => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchAddressList, setSearchAddressList] = useState<KakaoAddress[]>(
    [],
  );
  // TODO 클래스나 훅으로 빼기
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

  const handleClickCard = (addressInfo: KakaoAddress) => {
    const { kakao } = window;

    return () => {
      const marker = MapConfig.createMarker(
        kakao,
        addressInfo.x,
        addressInfo.y,
      );

      marker.setMap(map.current);
      kakao.maps.event.addListener(marker, 'click', function () {
        marker.setMap(map.current);
      });
      const closeOverlay = () => {
        overlay.setMap(null);
      };

      const overlay = new kakao.maps.CustomOverlay({
        content: createOveray(addressInfo, closeOverlay),
        map: map.current,
        position: marker.getPosition(),
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        console.log('good');
        overlay.setMap(map.current);
      });
    };
  };

  const createOveray = (addressInfo: KakaoAddress, method: () => void) => {
    // warp
    const wrap = document.createElement('article');
    wrap.className = 'overay-wrap';

    // header
    const header = document.createElement('div');
    header.className = 'overay-header';
    const headerContentWrap = document.createElement('div');
    headerContentWrap.className = 'overay-header-wrap';
    const placeName = document.createElement('span');
    const placeNameContent = document.createTextNode(addressInfo.place_name);
    placeName.className = 'overay-header-title';
    placeName.appendChild(placeNameContent);
    const placeCategory = document.createElement('span');
    console.log(addressInfo.category_name);
    const placeCategoryContent = document.createTextNode(
      addressInfo.category_name.split(' > ')[1],
    );
    placeCategory.className = 'overay-header-category';
    placeCategory.appendChild(placeCategoryContent);
    const closeButton = document.createElement('img');
    closeButton.className = 'overay-header-close';
    closeButton.src = CloseIcon;
    closeButton.alt = '닫기버튼';
    headerContentWrap.appendChild(placeName);
    headerContentWrap.appendChild(placeCategory);
    headerContentWrap.appendChild(closeButton);
    header.appendChild(headerContentWrap);

    // main
    const body = document.createElement('div');
    body.className = 'overay-body';
    const textWrap = document.createElement('div');
    textWrap.className = 'overay-body-text-wrap';
    const street = document.createElement('div');
    const streetContent = document.createTextNode(
      addressInfo.road_address_name,
    );
    street.className = 'overay-body-text-street';
    street.appendChild(streetContent);
    const zibun = document.createElement('div');
    const zibunContent = document.createTextNode(addressInfo.address_name);
    zibun.appendChild(zibunContent);
    zibun.className = 'overay-body-text-zibun';

    const additionalInfo = document.createElement('div');
    additionalInfo.className = 'overay-body-text-additional';

    const tel = document.createElement('span');
    const telContent = document.createTextNode(addressInfo.phone);
    tel.appendChild(telContent);
    tel.appendChild(telContent);
    tel.className = 'overay-body-text-tel';

    const link = document.createElement('a');
    const linkContent = document.createTextNode('홈페이지');
    link.target = '_blank';
    link.href = addressInfo.place_url;
    link.rel = 'noopener noreferrer';
    link.className = 'overay-body-text-link';
    link.appendChild(linkContent);
    additionalInfo.appendChild(tel);
    additionalInfo.appendChild(link);
    textWrap.appendChild(street);
    textWrap.appendChild(zibun);
    textWrap.appendChild(additionalInfo);

    const imageWrap = document.createElement('div');
    imageWrap.className = 'overay-body-image-wrap';
    const Image = document.createElement('img');
    body.appendChild(textWrap);
    body.appendChild(imageWrap);

    // footer
    const footer = document.createElement('div');
    footer.className = 'overay-footer';
    const pin = document.createElement('button');
    pin.className = 'overay-footer-pin-button';
    const pinImage = document.createElement('img');
    pinImage.src = PinIcon;
    pinImage.alt = '핀이미지';
    pin.appendChild(pinImage);
    const post = document.createElement('button');
    const postContent = document.createTextNode('포스팅 추가하기');
    post.appendChild(postContent);
    post.className = 'overay-footer-post-button';
    footer.appendChild(pin);
    footer.appendChild(post);
    // 닫기 이벤트 추가
    closeButton.onclick = function (e) {
      method();
    };

    // 삼각형
    const triangle = document.createElement('div');
    triangle.className = 'overay-triangle';
    wrap.appendChild(header);
    wrap.appendChild(body);
    wrap.appendChild(footer);
    wrap.appendChild(triangle);

    return wrap;
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
            console.log(data);
            return (
              <KakaoAddressCard
                addressData={data}
                onClick={handleClickCard(data)}
              />
            );
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
