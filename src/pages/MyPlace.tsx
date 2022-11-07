import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import MyPlaces from 'components/SideBar/MyPlaces';
import SideNav from 'components/SideNav/SideNav';
import MapLayout from 'components/UI/MapLayout';
import Map from '../components/Map';

interface Props {}

const CreateTrip: React.FC<Props> = () => {
  const mapRef = useRef<any>();
  const handleChangeRef = (map: any) => {
    mapRef.current = map;
  };
  return (
    <>
      <button onClick={() => console.log(mapRef)}>클릭</button>
      <MapLayout
        nav={<SideNav />}
        side={<MyPlaces mapRef={mapRef} />}
        map={<Map mapRef={mapRef} setMapRef={handleChangeRef} />}
      />
    </>
  );
};
export default CreateTrip;

const CreateTripWrap = styled.div``;
