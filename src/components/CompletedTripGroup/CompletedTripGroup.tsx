import CompletedTripCard from 'components/CompletedTripCard/CompletedTripCard';
import React from 'react';
import styled from 'styled-components';

const CompletedTripGroup = () => {
  return (
    <Wrap>
      <CompletedTripCard />
      <CompletedTripCard />
      <CompletedTripCard />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
`;

export default CompletedTripGroup;
