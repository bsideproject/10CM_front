import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import ImgItem from './ImgItem';
interface IProps {
  listsData: { img: string; text: string }[];
  isNav?: boolean;
}

const ImgLists: React.FC<IProps> = ({ listsData, isNav }) => {
  return (
    <MenuList isNav={isNav}>
      {listsData.map(data => (
        <ImgItem
          key={data.text}
          img={data.img}
          text={data.text}
          isNav={isNav}
        />
      ))}
    </MenuList>
  );
};

const MenuList = styled.ul<{ isNav?: boolean | undefined }>`
  width: ${props => (props.isNav ? '188px' : '64px')};
  height: 176px;
  padding: 16px 0px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-top: 1px solid ${colors.NEUTRAl_100};
`;

export default ImgLists;
