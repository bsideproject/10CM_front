import React from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
interface IProps {
  dayNum: number;
}
const DayNumBox: React.FC<IProps> = ({ dayNum }) => {
  return <Wrap>{`Day${dayNum}`}</Wrap>;
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  border-radius: 4px;
  ${fonts('text-xs-regular')};
  background-color: ${colors.WHITE};
`;

export default DayNumBox;
