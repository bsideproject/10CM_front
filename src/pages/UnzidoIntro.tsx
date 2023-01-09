import Intro from 'components/Intro/Intro';
import Nav from 'components/SideNav/Nav';
import HomeLayout from 'components/UI/HomeLayout';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import { asyncUserFetch } from 'store/modules/authInfo';

const UnzidoIntro = () => {
  const dispatch = useAppDispatch();
  dispatch(asyncUserFetch());
  const { status } = useAppSelect(state => state.authInfo);
  let isInitial = true;

  useEffect(() => {
    if (isInitial && status === 'fulfilled') {
      isInitial = false;
    }
  }, []);

  return <HomeLayout nav={<Nav />} content={<Intro />} />;
};

export default UnzidoIntro;
