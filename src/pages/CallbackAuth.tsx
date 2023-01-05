import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const CallbackAuth = () => {
  const param = useParams();
  const location = useLocation();

  console.log(param, location);
  return <div>로그인 중...</div>;
};

export default CallbackAuth;
