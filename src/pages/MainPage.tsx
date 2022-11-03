import React from 'react';
import styled from 'styled-components';

import Map from 'components/Map';
import SideNav from 'components/SideNav/SideNav';
import SearchPlace from 'components/SearchPlace/SearchPlace';
import MapLayout from 'components/UI/MapLayout';
import ModalForm from 'components/ModalContents/ModalForm';

const MainPage: React.FC = () => {
  // return <MapLayout nav={<SideNav />} side={<SearchPlace />} map={<Map />} />;
  return <ModalForm />;
};

export default MainPage;
