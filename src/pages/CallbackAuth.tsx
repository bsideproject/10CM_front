import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { routePath } from 'constants/route';

const CallbackAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const accessToken = query.access as string;
  localStorage.setItem('accessToken', accessToken);
  const getToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if(getToken) {
      navigate(routePath.INTRO, { replace: true });
    }
  }, [getToken]);
  // ref: navigate는 사용자 작동이나 훅에 의해 동작

  return <div>로그인 중...</div>;
};

export default CallbackAuth;
