import MyTripContent from 'components/MyTrip/MyTripContent';
import Nav from 'components/SideNav/Nav';
import HomeLayout from 'components/UI/HomeLayout';
import React from 'react';
import styled from 'styled-components';

interface Props {}

const MyPage: React.FC<Props> = () => {
  return (
    <HomeLayout
      nav={<Nav className="hover-open" />}
      content={<MyTripContent />}
    />
  );
};
export default MyPage;

const MyPageWrap = styled.div``;
