import React from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';

const DayBox = () => {
  return <Wrap />;
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  padding: 4px 12px;
  border-radius: 4px;
  ${fonts('text-xs-regular')};
`;

export default DayBox;
