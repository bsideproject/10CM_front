import Input from 'components/common/Input';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';

const SearchLocation: React.FC = () => {
  return (
    <Wrap>
      <span>위치*</span>
      <Input />
      <Input />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0px 0px;
  gap: 4px;
  width: 100%;

  > span {
    ${fonts('text-sm-bold')};
    color: ${colors.NEUTRAl_900};
  }
`;

export default SearchLocation;
