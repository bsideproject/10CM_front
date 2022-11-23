import SideNav from 'components/SideNav/SideNav';
import MapLayout from 'components/UI/MapLayout';
import React, { useRef } from 'react';
import Map from 'components/Map';
import SearchAddress from 'components/SideBar/SearchAddress';

interface Props {}

const CreateTrip: React.FC<Props> = () => {
  const mapRef = useRef<any>();

  return (
    <MapLayout
      nav={<SideNav />}
      side={<SearchAddress />}
      map={<Map mapRef={mapRef} />}
    />
  );
};
export default CreateTrip;
