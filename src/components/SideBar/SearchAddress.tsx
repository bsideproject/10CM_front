import { fonts } from 'assets/fonts/fonts';
import Input from 'components/Input';
import { colors } from 'constants/colors';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SearchAddressCard from 'components/SearchAddressCard';
import MyPlaceGroup from 'components/MyPlaceGroup';
import { ReactComponent as AddressSearchIcon } from '../../assets/svg/nav-search.svg';
import { ReactComponent as AddressBookMark } from '../../assets/svg/nav-bookmark.svg';
import { SearchWrap } from './styles';

interface Props {}

type SelectedType = 'search' | 'myPlace';

const SearchAddress: React.FC<Props> = () => {
  const [selectedMenu, setSelectedMenu] = useState<SelectedType>('search');
  const handleChangeMenu = (menu: SelectedType) => {
    return () => {
      setSelectedMenu(menu);
    };
  };
  return (
    <SearchAddressWrap>
      <SearchWrap>
        <Input />
      </SearchWrap>
      <SearchAddressNav>
        <ul>
          <li
            className={selectedMenu === 'search' ? 'selected' : ''}
            onClick={handleChangeMenu('search')}
          >
            <AddressSearchIcon fill="#B5C5F2" />
            <span>검색</span>
          </li>
          <li
            className={selectedMenu === 'myPlace' ? 'selected' : ''}
            onClick={handleChangeMenu('myPlace')}
          >
            <AddressBookMark fill="#B5C5F2" />
            <span>나의 관심장소</span>
          </li>
        </ul>
      </SearchAddressNav>
      {selectedMenu === 'myPlace' ? (
        <GroupWrap>
          <MyPlaceGroup />
        </GroupWrap>
      ) : (
        <div>
          <SearchAddressCard />
          <SearchAddressCard />
          <SearchAddressCard />
        </div>
      )}
    </SearchAddressWrap>
  );
};
export default SearchAddress;

const SearchAddressWrap = styled.div`
  width: 390px;
`;
const SearchAddressNav = styled.nav`
  border-bottom: 1px solid ${colors.NEUTRAl_100};
  ul {
    display: flex;
    padding: 4px 8px;
    li {
      ${fonts('text-sm-bold')};
      display: flex;
      align-items: center;
      padding: 10px 20px 10px 12px;
      cursor: pointer;
    }
    li.selected {
      color: ${colors.BLUE_BASE};
    }
  }
`;
const GroupWrap = styled.div`
  height: calc(100vh - 154px);
`;
