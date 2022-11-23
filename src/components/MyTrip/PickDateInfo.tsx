import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const PickDateInfo: React.FC = () => {
  return (
    <Wrap>
      <PickDay>DAY1</PickDay>
      <PickDate>9.29(목요일)</PickDate>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  border-bottom: 1px solid ${colors.NEUTRAl_100};
`;

const PickDay = styled.span`
  ${fonts('text-xs-bold')};
  color: ${colors.BLUE_BASE};
  letter-spacing: 0.013em;
`;

const PickDate = styled.span`
  ${fonts('text-xs-regular')};
  color: ${colors.NEUTRAl_400};
  letter-spacing: 0.013em;
`;

export default PickDateInfo;
