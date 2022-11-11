import EmptyContent from 'components/common/EmptyContent/EmptyContent';
import EmptyDnd from 'components/common/EmptyContent/EmptyDnd';
import React from 'react';
import styled from 'styled-components';

const TripBanner: React.FC = () => {
  return <Wrap />;
};

const Wrap = styled.div`
  width: 100%;
  height: 320px;
  background-color: #fa8566;
  /* display: flex; */
`;
export default TripBanner;
