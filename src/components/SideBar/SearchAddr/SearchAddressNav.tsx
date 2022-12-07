import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import { ReactComponent as AddressSearchIcon } from 'assets/svg/nav-search.svg';
import { ReactComponent as AddressBookMark } from 'assets/svg/nav-bookmark.svg';
type SelectedType = 'search' | 'myPlace';
interface IProps {
  selectedMenu: SelectedType;
  onChangeMenu: (menu: SelectedType) => void;
}

const SearchAddressNav: React.FC<IProps> = ({ selectedMenu, onChangeMenu }) => {
  return (
    <Wrap>
      <ul>
        <li
          className={selectedMenu === 'search' ? 'selected' : ''}
          onClick={() => onChangeMenu('search')}
        >
          <AddressSearchIcon fill="#B5C5F2" />
          <span>검색</span>
        </li>
        <li
          className={selectedMenu === 'myPlace' ? 'selected' : ''}
          onClick={() => onChangeMenu('myPlace')}
        >
          <AddressBookMark fill="#B5C5F2" />
          <span>나의 관심장소</span>
        </li>
      </ul>
    </Wrap>
  );
};

const Wrap = styled.nav`
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

      > span {
        margin-left: 2px;
      }
    }
    li.selected {
      color: ${colors.BLUE_BASE};
    }
  }
`;
export default SearchAddressNav;
