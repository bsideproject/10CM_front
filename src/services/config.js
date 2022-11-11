import introduceImg from 'assets/img/introduceImg.svg';
import interestPlaceImg from 'assets/img/interestPlaceImg.svg';
import myPlaceTripImg from 'assets/img/myPlaceTripImg.svg';
import logoutImg from 'assets/img/logoutImg.svg';

export const FILTERBOX_TEXT = '나의 관심장소';

export const NAV_DESC = [
  {
    img: introduceImg,
    text: '서비스 소개',
  },
  {
    img: interestPlaceImg,
    text: '나의 관심장소',
  },
  {
    img: myPlaceTripImg,
    text: '나의 여행',
  },
];

export const NAV_DESC_SEC = [
  {
    img: logoutImg,
    text: '로그아웃',
  },
];

export const MODAL_MYPLACE = {
  ADD: {
    headerText: '나의 관심장소 추가하기',
    btnText: '저장',
  },
  UPDATE: {
    headerText: '포스팅 수정하기',
    btnText: '수정 완료',
  },
  DELETE: {
    headerText: '나의 관심장소 삭제하기',
    btnText: '삭제',
  },
  TRIP: {
    headerText: '나의 여행',
    btnText: '저장하기',
  },
  PLACE_DETAIL: {
    headerText: '나의 여행 상세',
  },
};

export const INPUT_DESC = {
  TAG: {
    text: '태그',
    placeholder: '태그를 입력해주세요. (ex. #비건 #카페 #재즈바)',
  },
  TRIP: {
    text: '여행 제목*',
    placeholder: '글자수 20자 이내',
  },
};

export const TEXTAREA_DESC = {
  TAG: {
    text: '메모',
    placeholder: '장소에 대한 생각, 간략한 설명을 입력해주세요.',
  },
  TRIP: {
    text: '상세 설명',
    placeholder: '500자 이내 작성',
  },
};
