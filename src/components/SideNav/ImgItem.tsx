import React from 'react';
import styled from 'styled-components';

import Img from 'components/Img/Img';

import { colors } from 'constants/colors';
import { sizes } from 'constants/sizes';
interface IProps {
  src: string;
}

const ImgItem: React.FC<IProps> = ({ src }) => {
  return (
    <ListItem>
      <Img src={src} width={sizes.NAV_IMGS_SIZE} height={sizes.NAV_IMGS_SIZE} />
    </ListItem>
  );
};

const ListItem = styled.li`
  width: 64px;
  height: 48px;
  // padding은 이미지 내부에서 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  &:hover {
    color: ${colors.BLUE_BASE};
    background-color: ${colors.NEUTRAl_50};
  }
`;

export default ImgItem;
