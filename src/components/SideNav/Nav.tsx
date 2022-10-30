import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from 'constants/colors';
import Img from 'components/Img/Img';
import { fonts } from 'assets/fonts/fonts';
import profileImg from 'assets/img/profileImg.svg';
import navLogo from 'assets/img/navLogo.svg';
interface IProps {
  className: string;
}

const Nav: React.FC<IProps> = ({ className }) => {
  return (
    <Wrap className={className}>
      <NavContent>
        <LogoWrap>
          <Img src={navLogo} width="122px" height="32px" />
        </LogoWrap>
        <MenuWrap>
          <UserProfile>
            <Img src={profileImg} width="64px" height="64px" />
            <ProfileName>가나다라마바사아자님</ProfileName>
          </UserProfile>
          <MenuList>
            <ListItem>IMG1</ListItem>
            <ListItem>IMG2</ListItem>
            <ListItem>IMG3</ListItem>
          </MenuList>
          <LogoutList>
            <ListItem>IMG1</ListItem>
          </LogoutList>
        </MenuWrap>
      </NavContent>
    </Wrap>
  );
};

const defaultStyle = css`
  width: 220px;
`;

const Wrap = styled.div`
  ${defaultStyle}
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${colors.WHITE};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 3px rgba(0, 0, 0, 0.06);
`;

const NavContent = styled.div`
  ${defaultStyle};
  display: flex;
  flex-direction: column;
  height: 506px;
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
  width: 204px;
  height: 116px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

const ProfileName = styled.div`
  ${fonts('text-xxs-regular')}
  color: ${colors.NEUTRAl_600}
  width: 148px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuList = styled.ul`
  width: 188px;
  height: 176px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-top: 1px solid black;
  padding: 16px 0;
`;

const LogoutList = styled.ul`
  width: 188px;
  height: 48px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-top: 1px solid black;
  padding: 16px 0;
`;

const ListItem = styled.li`
  width: calc(100% - 32px);
  height: 48px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-radius: 12px;
`;
export default Nav;
