import Img from 'components/Img/Img';
import React from 'react';
import styled from 'styled-components';
import closeButton from 'assets/img/closeButton.svg';
import { sizes } from 'constants/sizes';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
interface IProps {
  headerText: string;
}

const ModalTitle: React.FC<IProps> = ({ headerText }) => {
  return (
    <Wrap>
      <span>{headerText}</span>
      <Img
        src={closeButton}
        width={sizes.CLOSE_BTN_SIZE}
        height={sizes.CLOSE_BTN_SIZE}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    ${fonts('title-md-bold')};
    color: ${colors.NEUTRAl_900};
  }
`;

export default ModalTitle;
