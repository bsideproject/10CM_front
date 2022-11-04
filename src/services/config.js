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
};
