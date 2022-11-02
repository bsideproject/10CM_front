import SideNav from 'components/SideNav/SideNav';
import MapLayout from 'components/UI/MapLayout';
import React from 'react';
import Map from 'components/Map';
import SearchAddress from 'components/SideBar/SearchAddress';

interface Props {}

const CreateTrip: React.FC<Props> = () => {
  return <MapLayout nav={<SideNav />} side={<SearchAddress />} map={<Map />} />;
};
export default CreateTrip;
