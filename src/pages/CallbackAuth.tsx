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
  // const accessToken = query.access as string;
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzI5MTI5NTIsImV4cCI6MTY3Mjk5OTM1Mn0.IVZeJt_77yvdMmTqkttWiCiT87KmUTmq1BxhKpgJA8TnVM7JzjyI7YyzVDgro9Gq_XLLeOIauRtR7mdws2hjQQ';
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
    getUserInfo(accessToken).then(res => dispatch(setAuthInfo(res)));

    navigate('/intro', { replace: true });

    window.location.replace(window.location.href);
  }, [accessToken]);

  return <div>로그인 중...</div>;
};

export default CallbackAuth;
