import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import MyPlaces from 'components/SideBar/MyPlaces';
import SideNav from 'components/SideNav/SideNav';
import MapLayout from 'components/UI/MapLayout';
import MapConfig from 'services/map-config.js';
import { MyPlaceResponse } from 'dtos/place';
import useRoadView from 'hooks/useRoadView';
import Map from '../components/Map';

interface Props {}

const CreateTrip: React.FC<Props> = () => {
  const { isRoadMap, setIsRoadMap, handleCreateRoadView } = useRoadView();
  const mapRef = useRef<any>();

  const handleChangeRef = (map: any) => {
    mapRef.current = map;
  };

  return (
    <MapLayout
      nav={<SideNav />}
      side={
        <MyPlaces map={mapRef} handleCreateRoadView={handleCreateRoadView} />
      }
      map={
        <Map
          mapRef={mapRef}
          setMapRef={handleChangeRef}
          isRoadMap={isRoadMap}
          setIsRoadMap={setIsRoadMap}
        />
      }
    />
  );
};
export default CreateTrip;

const CreateTripWrap = styled.div``;
