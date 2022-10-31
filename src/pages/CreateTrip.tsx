import React from 'react';
import styled from 'styled-components';
import MyPlaces from 'components/SideBar/MyPlaces';
import SideNav from 'components/SideNav/SideNav';
import MapLayout from 'components/UI/MapLayout';
import Map from '../components/Map';

interface Props {}

const CreateTrip: React.FC<Props> = () => {
  return <MapLayout nav={<SideNav />} side={<MyPlaces />} map={<Map />} />;
};
export default CreateTrip;

const CreateTripWrap = styled.div``;
