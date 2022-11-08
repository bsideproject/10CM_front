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
      <TestHeader />
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

const TestHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 72px;
  width: 100%;
  background-color: black;
`;

export default MapLayout;

// 1. fixed로 header설정
