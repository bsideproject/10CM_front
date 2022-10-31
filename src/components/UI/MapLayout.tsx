import React from 'react';
import styled from 'styled-components';
interface IProps {
  nav: React.ReactElement;
  side: React.ReactElement;
  map: React.ReactElement;
}

const MapLayout: React.FC<IProps> = ({ nav, side, map }) => {
  return (
    <Layout>
      {nav}
      {side}
      {map}
    </Layout>
  );
};

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export default MapLayout;
