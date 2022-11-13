import React from 'react';
import HomeLayout from 'components/UI/HomeLayout';
import Nav from 'components/SideNav/Nav';
import MyTripContent from 'components/MyTrip/MyTripContent';
import TripBanner from 'components/MyTrip/TripBanner';

interface Props {}

const MyTrip: React.FC<Props> = () => {
  return (
    <HomeLayout
      nav={<Nav className="hover-open" />}
      banner={<TripBanner />}
      content={<MyTripContent />}
    />
  );
};
export default MyTrip;
