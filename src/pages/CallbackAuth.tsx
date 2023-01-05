import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import qs from 'qs';

const CallbackAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const accessToken = query.access as string;

  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    navigate('/intro');
  }

  return <div>로그인 중...</div>;
};

export default CallbackAuth;
