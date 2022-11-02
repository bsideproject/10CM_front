import Input from 'components/common/Input';
import React from 'react';
import styled from 'styled-components';
import MyPlaceGroup from 'components/MyPlace/MyPlaceGroup';
import { SearchWrap } from './styles';

interface Props {}

const MyPlaces: React.FC<Props> = () => {
  return (
    <MyPlacesWrap>
      <SearchWrap>
        <Input />
      </SearchWrap>
      <GroupWrap>
        <MyPlaceGroup />
      </GroupWrap>
    </MyPlacesWrap>
  );
};
export default MyPlaces;

const MyPlacesWrap = styled.div`
  width: 390px;
`;
const GroupWrap = styled.div`
  height: calc(100vh - 96px);
`;
