import React from 'react';
import HomeLayout from 'components/UI/HomeLayout';
import Nav from 'components/SideNav/Nav';
import MyTripContent from 'components/MyTrip/MyTripContent';
import TripBanner from 'components/MyTrip/TripBanner';
import ModalForm from 'components/ModalContents/ModalForm';
import MyTripHeader from 'components/MyTrip/MyTripHeader';
import DayListBar from 'components/DayListBar/DayListBar';
interface Props {}

const MyTrip: React.FC<Props> = () => {
  return (
    // <ModalForm />

    // <div
    //   style={{
    //     width: '100vw',
    //     height: '100vh',
    //     display: 'flex',
    //     flexDirection: 'column',
    //   }}
    // >
    //   <MyTripHeader />
    //   <DayListBar />
    // </div>

    <HomeLayout
      nav={<Nav className="hover-open" />}
      banner={<TripBanner />}
      content={<MyTripContent />}
    />
  );
};
export default MyTrip;
