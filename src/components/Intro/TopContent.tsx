import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'constants/route';

const TopContent = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(routePath.MY_TRIP);
  };
  return (
    <Wrap>
      <span>나만의 소확행 여행 일정을 만들고 싶다면?</span>
      <span>당신이 원하던 그곳에 언젠간 와있을 지도</span>
      <MoveButton onClick={handleClickButton}>
        나만의 여행 일정 만들기
      </MoveButton>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(302px + 160px);
  padding: 80px 60px 85px 100px;
  gap: 19px;

  > span:nth-child(1) {
    ${fonts('text-sm-regular')};
    letter-spacing: 0.013em;
    color: ${colors.WHITE};
  }

  > span:nth-child(2) {
    ${fonts('title-2xl')};
    letter-spacing: 0.013em;
    color: ${colors.WHITE};
  }
`;

const MoveButton = styled.div`
  /* padding: 8px 32px; */
  width: 207px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  color: ${colors.WHITE};
  letter-spacing: 0.013em;
  display: flex;
  justify-content: center;
  align-items: center;
  ${fonts('text-xs-bold')};
  cursor: pointer;
`;

export default TopContent;
