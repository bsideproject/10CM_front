import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { setAuthInfo } from 'store/modules/authInfo';
import { getUserInfo } from 'apis/userInfo';
import { useAppDispatch } from 'store/configureStore.hooks';

const CallbackAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const accessToken = query.access as string;
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
    getUserInfo().then(res => dispatch(setAuthInfo(res)));

    navigate('/intro', { replace: true });

    window.location.replace(window.location.href);
  }, [accessToken]);

  return <div>로그인 중...</div>;
};

export default CallbackAuth;
