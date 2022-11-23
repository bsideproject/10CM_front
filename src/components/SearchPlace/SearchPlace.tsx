import PlaceCardContent from 'components/PlaceCardContent/PlaceCardContent';
import styled from 'styled-components';
import FilterBox from './FilterBox';

import SearchBar from './SearchBar';

const SearchPlace = () => {
  return (
    <Wrap>
      <SearchBar />
      <FilterBox />
      <PlaceCardContent />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 390px;
  height: 100%;
`;

export default SearchPlace;
