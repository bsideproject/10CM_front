import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IntroTopBg from 'assets/img/IntroTopBackground.svg';

import { ReactComponent as earthImg } from 'assets/img/earthImg.svg';
import IntroBottomBg from 'assets/img/introBottomBackground.svg';

import { useDispatch } from 'react-redux';
import { setAuthInfo, setIsLoggedIn, info } from 'store/modules/authInfo';
import { persistor } from 'index';
import BottomContent from './BottomContent';
import CenterContent from './CenterContent';
import TopContent from './TopContent';

const Intro = () => {
  const dispatch = useDispatch();
  const isExpirationToken = localStorage.getItem('expirationToken');
  useEffect(() => {
    if (isExpirationToken) {
      const initUserInfo = info;
      localStorage.clear();
      dispatch(setAuthInfo(initUserInfo));
      dispatch(setIsLoggedIn(false));
      persistor.purge();
    }
  }, [isExpirationToken]);
  return (
    <Wrap>
      <TopWrap>
        <TopContent />
        <EarthImg />
      </TopWrap>
      <CenterWrap>
        <CenterContent />
      </CenterWrap>
      <BottomWrap>
        <BottomContent />
      </BottomWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TopWrap = styled.div`
  background: url(${IntroTopBg});
  width: 100%;
  display: flex;
  /* height: 350px; */
`;

const EarthImg = styled(earthImg)`
  width: 422px;
  height: 242px;
  padding-top: 67px;
`;

const CenterWrap = styled.div`
  width: 100%;
  padding: 40px 100px;
`;

const BottomWrap = styled.div`
  background: url(${IntroBottomBg});
  width: 100%;
  padding: 83px 268.5px;
  z-index: 0;
`;
export default Intro;
