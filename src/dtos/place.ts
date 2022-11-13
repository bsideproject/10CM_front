/**
 * 장소 생성
 */
export interface CreatePlaceBody {
  // 주소
  address: string;

  // 상세주소
  addressDetail?: string;

  // 위도
  latitude: string;

  // 경도
  longitude: string;

  // 이름
  name: string;

  // 메모
  description?: string;

  // 태그
  tag?: string;
}

/**
 * 내가 저장한 장소
 */

export interface MyPlace {
  // 주소
  address: null | string;

  // 상세주소
  addressDetail: null | string;

  // 생성일
  createdDate: string;

  // 메모
  description: null | string;

  // 이미지 아이디
  imageId: null | number;

  // 위도
  latitude: string;

  // 경도
  longitude: string;

  // 수정일
  modifiedDate: string;

  // 휴대폰 번호
  phone: null | string;

  // 태그
  tag: string[];
}
/**
 * 내가 저장한 장소 목록
 */
export interface MyPlacesResponse {
  // 총 개수
  count: number;

  // 목록
  placeList: MyPlace[];
}
