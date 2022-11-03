import React from 'react';
import styled, { css } from 'styled-components';

import smallNavLogo from 'assets/img/smallNavLogo.svg';
import profileImg from 'assets/img/profileImg.svg';

import Img from 'components/Img/Img';

import * as CFG from 'services/config.js';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';

import ImgLists from './ImgLists';
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
          <Img
            src={profileImg}
            width="48px"
            height="48px"
            padding="18px 0 0 0"
          />
          <ProfileName>가나...님</ProfileName>
        </UserProfile>
        <ImgLists listsData={CFG.NAV_DESC} />
        <ImgLists listsData={CFG.NAV_DESC_SEC} />
      </MenuWrap>
    </Wrap>
  );
};
// 따로 빼고 시작
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
  ${fonts('text-xxs-regular')};
  color: ${colors.NEUTRAl_600};
  width: 64px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SmallNav;
