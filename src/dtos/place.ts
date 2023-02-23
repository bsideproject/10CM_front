/**
 * 장소 생성
 */
export interface CreatePlaceBody {
  // 장소 이름
  name: string;

  // 주소
  address: string;

  // 상세주소
  address_detail?: string;

  // 위도
  latitude: string;

  // 경도
  longitude: string;

  // 메모
  description?: string;

  // 태그
  tag?: string[];

  // 이미지
  image?: string;
}

/**
 * 장소 정보 수정
 */
export interface UpdatePlaceBody {
  // pk;
  id: number;

  // 장소 이름
  name: string;

  // 주소
  address: string;

  // 상세주소
  address_detail?: string;

  // 위도
  latitude: string;

  // 경도
  longitude: string;

  // 메모
  description?: string;

  // 태그
  tag?: string[];

  // 이미지
  image?: string;
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
  image?: any;

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
  place_list: MyPlaceResponse[];
}

/**
 * 내가 저장한 장소 목록 파라미터
 */
export type Sort = 'name,ASC' | 'createdDate,DESC' | 'modifiedDate,DESC';
export interface MyPlaceListQueryParams {
  page?: number;
  size?: number;
  sort: Sort;
  tag?: string;
}
