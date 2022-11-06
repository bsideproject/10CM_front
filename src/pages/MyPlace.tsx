import React, { useRef } from 'react';
import styled from 'styled-components';
import MyPlaces from 'components/SideBar/MyPlaces';
import SideNav from 'components/SideNav/SideNav';
import MapLayout from 'components/UI/MapLayout';
import Map from '../components/Map';

interface Props {}

const CreateTrip: React.FC<Props> = () => {
  const map = useRef<HTMLDivElement>(null);
  return (
    <MapLayout nav={<SideNav />} side={<MyPlaces />} map={<Map ref={map} />} />
  );
};
export default CreateTrip;

const CreateTripWrap = styled.div``;
