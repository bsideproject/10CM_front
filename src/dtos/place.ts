/**
 * 장소 생성
 */
export interface CreatePlaceBody {
  // 장소 이름
  name: string;

  // 주소
  address: string;

  // 상세주소
  addressDetail?: string;

  // 위도
  latitude: string;

  // 경도
  longitude: string;

  // 메모
  description?: string;

  // 태그
  tag?: string[];
}
export interface UpdatePlaceBody {
  // 장소 이름
  name: string;

  // 주소
  address: string;

  // 상세주소
  addressDetail?: string;

  // 위도
  latitude: string;

  // 경도
  longitude: string;

  // 메모
  description?: string;

  // 태그
  tag?: string[];
}

/**
 * 내가 저장한 장소
 */

export interface MyPlaceResponse {
  // 주소
  address: string;

  // 주소 상세
  addressDetail?: string;

  // 생성일
  createdDate: string;

  // 메모
  description?: string;

  // pk
  id: number;

  // 이미지
  imageId?: number;

  // 위도
  latitude: string;

  // 경도
  longitude: string;

  // 수정일
  modifiedDate: string;

  // 이름
  name: string;

  // 휴대폰 번호
  phone?: string;

  // 태그 리스트
  tag?: string[];
}

/**
 * 내가 저장한 장소 목록
 */
export interface MyPlaceListResponse {
  // 총 개수
  count: number;

  // 목록
  placeList: MyPlaceResponse[];
}

/**
 * 내가 저장한 장소 상세
 */
