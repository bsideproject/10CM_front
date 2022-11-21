import React from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
interface IProps {
  dayNum: number;
  setPickedDay: React.Dispatch<React.SetStateAction<any>>;
}
const DayNumBox: React.FC<IProps> = ({ dayNum, setPickedDay }) => {
  return <Wrap onClick={() => setPickedDay(dayNum)}>{`Day${dayNum}`}</Wrap>;
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  border-radius: 4px;
  cursor: pointer;
  ${fonts('text-xs-regular')};
  background-color: ${colors.WHITE};
`;

export default DayNumBox;
