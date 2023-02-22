import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { routePath } from 'constants/route';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import { asyncUserFetch } from 'store/modules/authInfo';
import { shallowEqual } from 'react-redux';

const CallbackAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const isLoggedIn = useAppSelect(state => state.authInfo.isLoggedIn);
  const accessToken = query.access as string;
  localStorage.setItem('accessToken', accessToken);

  const dispatch = useAppDispatch();
  dispatch(asyncUserFetch());
  // 처리를 어디서 할지 고민해보기
  useEffect(() => {
    if (isLoggedIn) {
      navigate(routePath.INTRO, { replace: true });
    }
  }, [isLoggedIn]);
  // ref: navigate는 사용자 작동이나 훅에 의해 동작

  return <div>로그인 중...</div>;
};

export default CallbackAuth;
