import React from 'react';
import styled from 'styled-components';

const SearchLocation: React.FC = () => {
  return (
    <Wrap>
      <span>위치</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0px 0px;
  gap: 4px;
  width: 432px;
  height: 132px;
`;

export default SearchLocation;
