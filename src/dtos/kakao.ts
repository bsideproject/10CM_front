export interface KakaoAddress {
  // 지번 주소
  address_name: string;

  // 그룹 코드
  category_group_code: string;

  // 그룹 이름
  category_group_name: string;

  // 주소 카테고리
  category_name: string;
  distance: string;

  // pk
  id: string;

  // 전화번호
  phone: string;

  // 장소 이름
  place_name: string;

  // 장소 링크
  place_url: string;

  // 도로명 주소
  road_address_name: string;

  // 좌표
  x: string;
  y: string;
}
