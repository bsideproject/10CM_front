import Intro from 'components/Intro/Intro';
import Nav from 'components/SideNav/Nav';
import HomeLayout from 'components/UI/HomeLayout';
import React, { useEffect } from 'react';
import { useAppDispatch } from 'store/configureStore.hooks';
import { asyncUserFetch } from 'store/modules/authInfo';

const UnzidoIntro = () => {
  const dispatch = useAppDispatch();
  dispatch(asyncUserFetch());

  useEffect(() => {
    window.location.reload();
  }, []);

  return <HomeLayout nav={<Nav />} content={<Intro />} />;
};

export default UnzidoIntro;
