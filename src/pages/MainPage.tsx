import React, { useRef } from 'react';
import styled from 'styled-components';

import Map from 'components/Map';
import SideNav from 'components/SideNav/SideNav';
import SearchPlace from 'components/SearchPlace/SearchPlace';
import MapLayout from 'components/UI/MapLayout';

const MainPage: React.FC = () => {
  const mapRef = useRef<any>();
  return (
    <MapLayout
      nav={<SideNav />}
      side={<SearchPlace />}
      map={<Map mapRef={mapRef} />}
    />
  );
};

export default MainPage;
