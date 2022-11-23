import DayListBar from 'components/DayListBar/DayListBar';
import Map from 'components/Map';
import MyTripHeader from 'components/MyTrip/MyTripHeader';
import MyPlaces from 'components/SideBar/MyPlaces';
import SearchAddress from 'components/SideBar/SearchAddress';
import React, { useRef } from 'react';
import styled from 'styled-components';

const MakeMyTrip: React.FC = () => {
  const mapRef = useRef<any>();
  const handleChangeRef = (map: any) => {
    mapRef.current = map;
  };
  return (
    <Wrap>
      <MyTripHeader />
      <MainWrap>
        <DayListBar />
        <SearchAddress />
        <Map mapRef={mapRef} setMapRef={handleChangeRef} />
      </MainWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainWrap = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export default MakeMyTrip;
