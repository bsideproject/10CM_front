import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { routePath } from 'constants/route';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import { asyncUserFetch } from 'store/modules/authInfo';
import styled from 'styled-components';
import LoadingSpinner from 'components/common/LoadingSpinner';

const CallbackAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const isLoggedIn = useAppSelect(state => state.authInfo.isLoggedIn);
  const accessToken = query.access as string;
  localStorage.setItem('accessToken', accessToken);
  dispatch(asyncUserFetch(accessToken));

  // 처리를 어디서 할지 고민해보기
  useEffect(() => {
    // dispatch(asyncUserFetch(accessToken));
  }, [accessToken]);

  useEffect(() => {
    if (isLoggedIn) {
      // navigate(routePath.INTRO, { replace: true });
      window.location.replace('https://unzido.site/intro');
    }
  }, [isLoggedIn]);
  // ref: navigate는 사용자 작동이나 훅에 의해 동작

  return (
    <Wrap>
      <LoadingSpinner />
      <span>로그인 중 입니다.</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export default CallbackAuth;
