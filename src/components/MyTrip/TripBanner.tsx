import EmptyDnd from 'components/common/EmptyContent/EmptyDnd';
import React from 'react';
import styled from 'styled-components';

const TripBanner = () => {
  return (
    <Wrap>
      <EmptyDnd />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 320px;
  background-color: #fa8566;
`;
export default TripBanner;
