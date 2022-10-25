import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React from 'react';
import styled, { css } from 'styled-components';

type Color = 'green' | 'blue';

interface Props {
  children: string | number;
  color?: Color;
}

const DayNumber: React.FC<Props> = ({ children, color }) => {
  return <MyDayNumber color={color}>{children}</MyDayNumber>;
};
export default DayNumber;
const getDayNumber = (color?: Color) => {
  switch (color) {
    case 'blue':
      return css`
        background-color: ${colors.BLUE_BASE};
      `;
    case 'green':
      return css`
        background-color: ${colors.GREEN_BASE};
      `;
    default:
      return css`
        background-color: ${colors.BLUE_BASE};
      `;
  }
};

const MyDayNumber = styled.div<{ color?: Color }>`
  display: inline-block;
  height: 26px;
  padding: 0 13.5px;
  text-align: center;
  border-radius: 999px;
  color: ${colors.WHITE};
  ${fonts('text-xs-bold')};
  ${({ color }) => getDayNumber(color)};
`;
