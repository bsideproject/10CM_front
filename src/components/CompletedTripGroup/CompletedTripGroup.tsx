import CompletedTripCard from 'components/CompletedTripCard/CompletedTripCard';
import { MyTrip } from 'dtos/trip';
import React from 'react';
import styled from 'styled-components';
interface IProps {
  data: MyTrip[];
}
const CompletedTripGroup: React.FC<IProps> = ({ data }) => {
  return (
    <Wrap>
      {data.map(el => (
        <CompletedTripCard key={el.trip_id} data={el} />
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  flex-wrap: wrap;
`;

export default CompletedTripGroup;
