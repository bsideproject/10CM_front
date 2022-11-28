export interface Address {
  address: string;
  //   addressEnglish: '20, Gukhoe-daero 22-gil, Yeongdeungpo-gu, Seoul, Korea';
  //   addressType: 'R';
  //   apartment: 'N';
  //   autoJibunAddress: '서울 영등포구 양평동3가 57-3';
  //   autoJibunAddressEnglish: '57-3, Yangpyeong-dong 3(sam)-ga, Yeongdeungpo-gu, Seoul, Korea';
  //   autoRoadAddress: '';
  //   autoRoadAddressEnglish: '';
  //   bcode: '1156012700';
  //   bname: '양평동3가';
  //   bname1: '';
  //   bname1English: '';
  //   bname2: '양평동3가';
  //   bname2English: 'Yangpyeong-dong 3(sam)-ga';
  //   bnameEnglish: 'Yangpyeong-dong 3(sam)-ga';
  //   buildingCode: '1156012700100570003020644';
  //   buildingName: '';
  //   hname: '';
  //   jibunAddress: '';
  //   jibunAddressEnglish: '';
  //   noSelected: 'N';
  //   postcode: '';
  //   postcode1: '';
  //   postcode2: '';
  //   postcodeSeq: '';
  //   query: '서울특별시 영등포구 양평동3가 ';
  //   roadAddress: '서울 영등포구 국회대로22길 20';
  //   roadAddressEnglish: '20, Gukhoe-daero 22-gil, Yeongdeungpo-gu, Seoul, Korea';
  //   roadname: '국회대로22길';
  //   roadnameCode: '4154068';
  //   roadnameEnglish: 'Gukhoe-daero 22-gil';
  //   sido: '서울';
  //   sidoEnglish: 'Seoul';
  //   sigungu: '영등포구';
  //   sigunguCode: '11560';
  //   sigunguEnglish: 'Yeongdeungpo-gu';
  //   userSelectedType: 'R';
  //   zonecode: '07268';
}
export interface LatLng {
  x: string;
  y: string;
}

export interface AddrT {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface DndType extends AddrT {
  number: number;
}
