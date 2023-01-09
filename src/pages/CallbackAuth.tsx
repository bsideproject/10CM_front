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

  navigate(routePath.INTRO, { replace: true });

  return <div>로그인 중...</div>;
};

export default CallbackAuth;
