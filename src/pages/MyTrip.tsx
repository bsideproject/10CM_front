/* eslint-disable import/no-cycle */
import React from 'react';
import HomeLayout from 'components/UI/HomeLayout';
import Nav from 'components/SideNav/Nav';
import MyTripContent from 'components/MyTrip/MyTripContent';
import TripBanner from 'components/MyTrip/TripBanner';

interface Props {}

const MyTrip: React.FC<Props> = () => {
  return <HomeLayout nav={<Nav />} content={<MyTripContent />} />;
};
export default MyTrip;
