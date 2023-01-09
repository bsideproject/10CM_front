import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'constants/route';
const BottomContent = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate(routePath.MY_TRIP);
  };
  return (
    <Wrap>
      <Paragraph>랜선으로만 여행했던 그때 그 장소,</Paragraph>
      <Paragraph>
        <span>언젠가</span> 당신의 일상에 성큼 <span>와있을 지도</span> 몰라요!
      </Paragraph>
      <MoveButton onClick={handleClickButton}>
        지금 바로 소중한 여행 시작하기
      </MoveButton>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 443px;
`;

const Paragraph = styled.p`
  ${fonts('title-lg-bold')};
  color: #222222;
  letter-spacing: 0.013em;
  text-align: center;
  white-space: pre-wrap;

  > span {
    color: ${colors.BLUE_BASE};
  }
`;

const MoveButton = styled.div`
  width: 238px;
  height: 42px;
  border-radius: 4px;
  color: ${colors.WHITE};
  letter-spacing: 0.013em;
  display: flex;
  justify-content: center;
  align-items: center;
  ${fonts('text-xs-bold')};
  cursor: pointer;
  font-size: 14px;
  margin-top: 16px;
  background: linear-gradient(
    271.78deg,
    #436ddb 0%,
    #33d5b6 100%,
    #00cba4 100%
  );
  z-index: 10;
`;

export default BottomContent;
