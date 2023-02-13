import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { routePath } from 'constants/route';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import { asyncUserFetch } from 'store/modules/authInfo';

const CallbackAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { status } = useAppSelect(state => state.authInfo);
  const [authStatus, setAuthStatus] = useState(status);
  const accessToken = query.access as string;
  localStorage.setItem('accessToken', accessToken);
  const getToken = localStorage.getItem('accessToken');

  const dispatch = useAppDispatch();
  dispatch(asyncUserFetch());

  useEffect(() => {
    setAuthStatus(status);
    if (status === 'fulfilled') {
      navigate(routePath.INTRO, { replace: true });
    }
  }, [status]);
  // ref: navigate는 사용자 작동이나 훅에 의해 동작

  return <div>로그인 중...</div>;
};

export default CallbackAuth;
