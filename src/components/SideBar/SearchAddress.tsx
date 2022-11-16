import { fonts } from 'assets/fonts/fonts';
import Input from 'components/common/Input';
import { colors } from 'constants/colors';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SearchAddressCard from 'components/SearchCard';
import MyPlaceGroup from 'components/CreateTrip/MyPlaceGroup';
import useEnteredInfo from 'components/hook/useEnteredInfo';

import { SearchWrap } from './styles';
import SearchAddressNav from './SearchAddr/SearchAddressNav';
import SearchCardGroup from './SearchAddr/SearchCardGroup';

interface Props {}

type SelectedType = 'search' | 'myPlace';

const SearchAddress: React.FC<Props> = () => {
  const [selectedMenu, setSelectedMenu] = useState<SelectedType>('search');
  const [searchValue, onChangeSearchValue] = useEnteredInfo('');

  const handleChangeMenu = (menu: SelectedType) => {
    setSelectedMenu(menu);
  };

  return (
    <SearchAddressWrap>
      <SearchWrap>
        <Input
          placeholder="장소 검색"
          isSearch
          value={searchValue}
          onChange={onChangeSearchValue}
        />
      </SearchWrap>
      <SearchAddressNav
        selectedMenu={selectedMenu}
        onChangeMenu={handleChangeMenu}
      />
      {selectedMenu === 'myPlace' ? (
        <GroupWrap>
          <MyPlaceGroup />
        </GroupWrap>
      ) : (
        <SearchCardGroup />
      )}
    </SearchAddressWrap>
  );
};
export default SearchAddress;

const SearchAddressWrap = styled.div`
  width: 390px;
`;

const GroupWrap = styled.div`
  height: calc(100vh - 154px);
`;
