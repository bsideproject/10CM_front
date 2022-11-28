import Intro from 'components/Intro/Intro';
import Nav from 'components/SideNav/Nav';
import HomeLayout from 'components/UI/HomeLayout';
import React from 'react';

const UnzidoIntro = () => {
  return <HomeLayout nav={<Nav />} content={<Intro />} />;
};

export default UnzidoIntro;
