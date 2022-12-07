import EmptyContent from 'components/common/EmptyContent/EmptyContent';
import EmptyDnd from 'components/common/EmptyContent/EmptyDnd';
import React from 'react';
import styled from 'styled-components';
import myTripBannerBg from 'assets/img/myTripBanner.svg';
import bannerPlusIcon from 'assets/img/bannerPlusIcon.svg';
import bannerShareIcon from 'assets/img/bannerShareIcon.svg';
import { sizes } from 'constants/sizes';
import { fonts } from 'assets/fonts/fonts';
import Img from 'components/Img/Img';
const TripBanner: React.FC = () => {
  return (
    <Wrap>
      <TextWrap>
        <Title>
          <TitleTop>나만의 장소로 만드는 여행 기록</TitleTop>
          <TitleMain>
            <span>누구나 빠르고 쉽게</span>
            <span>
              <span>여행 일정</span>을 만드세요!
            </span>
          </TitleMain>
        </Title>
        <NotifyWrap>
          <div>
            <Img
              src={bannerPlusIcon}
              width={sizes.PLUS_ICON_SIZE}
              height={sizes.PLUS_ICON_SIZE}
            />
            <span>나의 관심 장소를 일정에 추가하고</span>
          </div>
          <div>
            <Img
              src={bannerShareIcon}
              width={sizes.PLUS_ICON_SIZE}
              height={sizes.PLUS_ICON_SIZE}
            />
            <span>저장 후, 나만의 여행을 공유해 보세요!</span>
          </div>
        </NotifyWrap>
      </TextWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 340px;
  background: url(${myTripBannerBg});
  padding: 76px 0 80px 100px;
  /* display: flex; */
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleTop = styled.span`
  ${fonts('text-xxs-regular')};
`;

const TitleMain = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  > span:nth-child(2) > span {
    color: #00a283;
  }
`;

const NotifyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${fonts('caption')};
  > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
export default TripBanner;

// Alert: notifyWrap 글자가 너무 작음
