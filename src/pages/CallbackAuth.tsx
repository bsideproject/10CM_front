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
  // const accessToken =
  //   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzI5MTI5NTIsImV4cCI6MTY3Mjk5OTM1Mn0.IVZeJt_77yvdMmTqkttWiCiT87KmUTmq1BxhKpgJA8TnVM7JzjyI7YyzVDgro9Gq_XLLeOIauRtR7mdws2hjQQ';

  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
    getUserInfo(accessToken).then(async res => {
      await dispatch(setAuthInfo(res));
      navigate('/intro', { replace: true });
      window.location.replace(window.location.href);
    });
    // 비동기라서 navigate에 씹히는거같음
    // 다른 방도를 생각해보아야 할 듯
    // 원래 기존의 방식대로 하는데 거기서 intro만
    // 기존의 방식으로 하고 나머지는 리덕스로 해도 무난
  }, [accessToken]);

  return <div>로그인 중...</div>;
};

export default CallbackAuth;
