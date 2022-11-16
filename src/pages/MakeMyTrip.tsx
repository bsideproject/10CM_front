import DayListBar from 'components/DayListBar/DayListBar';
import Map from 'components/Map';
import MyTripHeader from 'components/MyTrip/MyTripHeader';
import MyPlaces from 'components/SideBar/MyPlaces';
import SearchAddress from 'components/SideBar/SearchAddress';
import MakeTripLayout from 'components/UI/MakeTripLayout';
import React, { useRef } from 'react';
import styled from 'styled-components';

const MakeMyTrip: React.FC = () => {
  const mapRef = useRef<any>();
  const handleChangeRef = (map: any) => {
    mapRef.current = map;
  };

  return (
    <MakeTripLayout
      header={<MyTripHeader />}
      nav={<DayListBar />}
      searchPlace={<SearchAddress />}
      map={<Map mapRef={mapRef} setMapRef={handleChangeRef} />}
    />
  );
};

export default MakeMyTrip;
