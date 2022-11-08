import React from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import { sizes } from 'constants/sizes';
import Img from 'components/Img/Img';
import dndIcon from 'assets/img/dndIcon.svg';
const EmptyDnd = () => {
  return (
    <Wrap>
      <p>{'Drag & Drop으로 일정의\n순서를 쉽게 변경해 보세요!'}</p>
      <Img
        src={dndIcon}
        width={sizes.EMPTY_DND_SIZE}
        height={sizes.EMPTY_DND_SIZE}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${fonts('text-xs-regular')};
  color: ${colors.NEUTRAl_400};
  white-space: pre-wrap;
  border-radius: 12px;
  background-color: ${colors.WHITE};
  width: 310px;
  padding: 20px 0;
  letter-spacing: 0.013em;

  > p {
    margin-right: 8px;
  }
`;

export default EmptyDnd;
