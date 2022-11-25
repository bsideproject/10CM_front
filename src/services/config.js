import introduceImg from 'assets/img/introduceImg.svg';
import interestPlaceImg from 'assets/img/interestPlaceImg.svg';
import myPlaceTripImg from 'assets/img/myPlaceTripImg.svg';
import logoutImg from 'assets/img/logoutImg.svg';
import introCenterTop from 'assets/img/introCenterTopImg.svg';
import introCenterMiddle from 'assets/img/introCenterMiddleImg.svg';
import introCenterBottom from 'assets/img/introCenterBottomImg.svg';

export const FILE_SIZE_MAX_LIMIT = 500 * 1024 * 1024;
export const FILTERBOX_TEXT = '나의 관심장소';
export const INIT_ADD_IMG_LABEL = '사진 추가';

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

export const INTRO_CENTER = {
  TOP: [
    '나의 관심 장소',
    '나만의 장소를 저장해요',
    '태크로 분류하여 나만의 장소를 스크랩 해보세요.',
  ],
  MIDDLE: [
    '나의 여행 일정',
    '일정과 동선을 계획해요',
    '나만의 장소로 구성한 여행을 계획해보세요.',
  ],
  BOTTOM: [
    '여행 일정 공유',
    '소중한 사람과 일정을 공유해요',
    '여행 일정을 링크로 복사하고 공유해 보세요.',
  ],
  IMG: [introCenterTop, introCenterMiddle, introCenterBottom],
};
