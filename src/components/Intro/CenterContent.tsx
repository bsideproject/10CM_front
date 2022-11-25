import React from 'react';
import styled from 'styled-components';
import * as CFG from 'services/config.js';
import Img from 'components/Img/Img';
import CenterContentText from './CenterContentText';

const CenterContent = () => {
  const { TOP, MIDDLE, BOTTOM, IMG } = CFG.INTRO_CENTER;
  const data = [TOP, MIDDLE, BOTTOM];
  const content = data.map((el, idx) => {
    if (idx % 2 === 0) {
      return (
        <ContentWrap>
          <CenterContentText data={data[idx]} />
          <Img
            src={IMG[idx]}
            width="360px"
            height="230px"
            borderRadius="12px"
            background="linear-gradient(290.5deg, #C9D8FF 0%, #D8E3FF 106.67%)"
          />
        </ContentWrap>
      );
    }
    return (
      <ContentWrap>
        <Img
          src={IMG[idx]}
          width="360px"
          height="230px"
          borderRadius="12px"
          background="linear-gradient(290.5deg, #C9D8FF 0%, #D8E3FF 106.67%)"
        />
        <CenterContentText data={data[idx]} />
      </ContentWrap>
    );
  });

  return <Wrap>{content}</Wrap>;
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default CenterContent;
