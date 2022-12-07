import React from 'react';
import styled from 'styled-components';
interface IProps {
  header: React.ReactElement;
  nav: React.ReactElement;
  searchPlace: React.ReactElement;
  map: React.ReactElement;
}

const MakeTripLayout: React.FC<IProps> = ({
  header,
  nav,
  searchPlace,
  map,
}) => {
  return (
    <Layout>
      {header}
      <MainWrap>
        {nav}
        {searchPlace}
        {map}
      </MainWrap>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainWrap = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export default MakeTripLayout;
