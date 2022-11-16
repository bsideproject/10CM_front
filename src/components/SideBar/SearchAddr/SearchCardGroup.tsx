import SearchCard from 'components/SearchCard';
import React from 'react';
import styled from 'styled-components';

const SearchCardGroup = () => {
  return (
    <Wrap>
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
    </Wrap>
  );
};

const Wrap = styled.div`
  height: calc(100vh - 216px);
  overflow-y: scroll;
`;

export default SearchCardGroup;
