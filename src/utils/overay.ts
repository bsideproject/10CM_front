import { KakaoAddress } from 'dtos/kakao';
import CloseIcon from 'assets/svg/close.svg';
import PinIcon from 'assets/svg/overay-pin.svg';

type CreateOveray = (
  addressInfo: KakaoAddress,
  onClose: () => void,
  onCreateClick: (info: KakaoAddress) => void,
) => {};

// 검색한 결과 클릭 시 오버레이
export const createOveray: CreateOveray = (
  addressInfo,
  onClose,
  onCreateClick,
) => {
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
  const streetContent = document.createTextNode(addressInfo.road_address_name);
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
  post.onclick = () => {
    onCreateClick(addressInfo);
  };
  footer.appendChild(pin);
  footer.appendChild(post);
  // 닫기 이벤트 추가
  closeButton.onclick = function (e) {
    onClose();
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
