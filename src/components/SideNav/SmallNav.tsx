import React from 'react';
import styled, { css } from 'styled-components';

<<<<<<< HEAD
import smallNavLogo from "assets/img/smallNavLogo.svg";
import profileImg from "assets/img/profileImg.svg";
import Img from "components/Img/Img";
=======
import smallNavLogo from 'assets/img/smallNavLogo.svg';
import profileImg from 'assets/img/profileImg.svg';
import Img from 'components/Img/Img';
>>>>>>> 631676314e81e6a6f8f2e260bfb3d6855cd1bcd1

import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';

interface IProps {
  className: string;
}
const SmallNav: React.FC<IProps> = ({ className }) => {
  return (
    <Wrap className={className}>
      <LogoWrap>
        <Img src={smallNavLogo} width="44px" height="44px" />
      </LogoWrap>
      <MenuWrap>
        <UserProfile>
<<<<<<< HEAD
          <Img src={profileImg} width="48px" height="44px" />
        </UserProfile>
        <ul>
          <li>test1</li>
          <li>test2</li>
          <li>test3</li>
        </ul>
=======
          <Img
            src={profileImg}
            width="48px"
            height="48px"
            padding="18px 0 0 0"
          />
          <ProfileName>가나...님</ProfileName>
        </UserProfile>
        <MenuList>
          <ListItem>img1</ListItem>
          <ListItem>img2</ListItem>
          <ListItem>img3</ListItem>
        </MenuList>
        <MenuList>
          <ListItem>img1</ListItem>
        </MenuList>
>>>>>>> 631676314e81e6a6f8f2e260bfb3d6855cd1bcd1
      </MenuWrap>
    </Wrap>
  );
};

const defaultStyle = css`
  width: 80px;
`;

const Wrap = styled.div`
  ${defaultStyle};
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.WHITE};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 3px rgba(0, 0, 0, 0.06);
`;

const LogoWrap = styled.div`
  ${defaultStyle};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuWrap = styled.div`
  ${defaultStyle};
  height: 406px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 116px;
  width: 64px;
  margin: 0 auto;
`;

const ProfileName = styled.div`
  ${fonts('text-xxs-regular')}
  color: ${colors.NEUTRAl_600}
  width: 64px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuList = styled.ul`
  width: 64px;
  height: 176px;
  padding: 16px 0px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-top: 1px solid black;
`;

const ListItem = styled.li`
  width: 64px;
  height: 48px;
  // padding은 이미지 내부에서 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  border-radius: 12px;
`;

export default SmallNav;
