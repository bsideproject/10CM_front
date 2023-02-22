import Intro from 'components/Intro/Intro';
import Nav from 'components/SideNav/Nav';
import HomeLayout from 'components/UI/HomeLayout';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import { asyncUserFetch } from 'store/modules/authInfo';

const UnzidoIntro = () => {
  return <HomeLayout nav={<Nav />} content={<Intro />} />;
};

export default UnzidoIntro;
