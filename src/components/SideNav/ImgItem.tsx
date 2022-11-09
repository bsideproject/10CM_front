import React from 'react';
import styled from 'styled-components';

import Img from 'components/Img/Img';

import { sizes } from 'constants/sizes';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
interface IProps {
  img: string;
  text: string;
  isNav?: boolean;
}

const ImgItem: React.FC<IProps> = ({ img, text, isNav }) => {
  return (
    <ListItem isNav={isNav}>
      <Img src={img} width={sizes.NAV_IMGS_SIZE} height={sizes.NAV_IMGS_SIZE} />
      {isNav && <ListText>{text}</ListText>}
    </ListItem>
  );
};

const ListItem = styled.li<{ isNav?: boolean | undefined }>`
  width: ${props => (props.isNav ? 'calc(188px - 32px)' : '64px')};
  padding: ${props => props.isNav && '0 16px'};
  height: 48px;
  // padding은 이미지 내부에서 12px 0px;
  display: flex;
  justify-content: ${props => (props.isNav ? 'row' : 'center')};
  align-items: center;
  border-radius: 12px;
  &:hover {
    color: ${colors.BLUE_BASE};
    background-color: ${colors.NEUTRAl_50};
  }
`;

const ListText = styled.span`
  color: ${colors.NEUTRAl_700};
  ${fonts('text-xs')}
  height: 26px;
  letter-spacing: 0.013em;
  margin-left: 12px;
`;

export default ImgItem;
