import introduceImg from 'assets/img/introduceImg.svg';
import interestPlaceImg from 'assets/img/interestPlaceImg.svg';
import myPlaceTripImg from 'assets/img/myPlaceTripImg.svg';
import logoutImg from 'assets/img/logoutImg.svg';
import modalCloseImg from 'assets/img/modalCloseImg.svg';

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

export const MODAL_MYPLACE = [
  {
    headerText: '나의 관심장소 추가하기',
    btnText: '저장',
    closeImg: modalCloseImg,
  },
  {
    headerText: '포스팅 수정하기',
    btnText: '수정 완료',
    closeImg: modalCloseImg,
  },
];
