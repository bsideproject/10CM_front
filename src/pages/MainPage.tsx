import Map from "components/Map";
import SearchPlace from "components/SearchPlace/SearchPlace";
import styled from "styled-components";

import SideNav from "components/SideNav/SideNav";
import MapLayout from "components/UI/MapLayout";

const MainPage: React.FC = () => {
  return <MapLayout nav={<SideNav />} side={<SearchPlace />} map={<Map />} />;
};

export default MainPage;
