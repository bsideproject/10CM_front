import Nav from 'components/SideNav/Nav';
import HomeLayout from 'components/UI/HomeLayout';
import React from 'react';
import styled from 'styled-components';
import MyPageComponent from 'components/MyPage';

interface Props {}

const MyPage: React.FC<Props> = () => {
  return (
    <HomeLayout
      nav={<Nav className="hover-open" />}
      content={<MyPageComponent />}
    />
  );
};
export default MyPage;
