import React from 'react';
import styled, { css } from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
interface IProps {
  idx: number;
  pickedDay: number;
  showBoxLen: number;
  isModalType: boolean;
  setPickedDay: React.Dispatch<React.SetStateAction<any>>;
}
const DayNumBox: React.FC<IProps> = ({
  idx,
  pickedDay,
  showBoxLen,
  isModalType,
  setPickedDay,
}) => {
  const day = idx + 1;
  const moveBox = isModalType ? showBoxLen - 6 : showBoxLen - 4;
  return (
    <Wrap
      idx={idx}
      moveBox={moveBox}
      pickedDay={pickedDay}
      onClick={() => setPickedDay(day)}
    >{`Day${day}`}</Wrap>
  );
};

const pickedCss = css`
  color: ${colors.WHITE};
  background: ${colors.BLUE_BASE};
`;

const Wrap = styled.div<{ idx: number; pickedDay: number; moveBox: number }>`
  position: absolute;
  left: ${({ idx, moveBox }) => `${66 * idx + moveBox * -66}px`};
  transition: 0.3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.013em;
  ${fonts('text-xs-regular')};
  color: ${colors.BLUE_BASE};
  background-color: ${colors.WHITE};

  ${({ pickedDay, idx }) => (pickedDay === idx + 1 ? pickedCss : undefined)}
`;

export default DayNumBox;
// ref: left는 56px + 8px , Day간 간격이 8px
