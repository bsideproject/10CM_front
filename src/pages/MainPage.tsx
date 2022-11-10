import React from 'react';
import styled from 'styled-components';

import Map from 'components/Map';
import SideNav from 'components/SideNav/SideNav';
import MapLayout from 'components/UI/MapLayout';
import ModalForm from 'components/ModalContents/ModalForm';
import SearchAddress from 'components/SideBar/SearchAddress';

const MainPage: React.FC = () => {
  return <MapLayout nav={<SideNav />} side={<SearchAddress />} map={<Map />} />;
  // return <ModalForm />;
};

export default MainPage;
