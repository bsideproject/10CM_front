import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { colors } from 'constants/colors';
import Img from 'components/Img/Img';
import { fonts } from 'assets/fonts/fonts';
import * as CFG from 'services/config.js';
import defaultLoginImg from 'assets/img/defaultLoginImg.svg';
import navLogo from 'assets/img/navLogo.svg';
import smallRightArrowBtn from 'assets/img/smallRightArrowBtn.svg';
import Login from 'components/common/ModalContents/Login';
import ImgLists from './ImgLists';
interface IProps {
  className?: string;
}

const Nav: React.FC<IProps> = ({ className }) => {
  const [onLoginModal, setOnLoginModal] = useState(false);
  const handleClickLogin = () => {
    setOnLoginModal(!onLoginModal);
  };
  return (
    <Wrap className={className}>
      <NavContent>
        <LogoWrap>
          <Img src={navLogo} width="122px" height="32px" />
        </LogoWrap>
        <MenuWrap>
          <UserProfile>
            <Img src={defaultLoginImg} width="64px" height="64px" />
            <ProfileWrap onClick={handleClickLogin}>
              <ProfileName>로그인</ProfileName>
              <Img src={smallRightArrowBtn} width="20px" height="20px" />
            </ProfileWrap>
          </UserProfile>
          <ImgLists listsData={CFG.NAV_DESC} isNav />
          <ImgLists listsData={CFG.NAV_DESC_SEC} isNav />
        </MenuWrap>
      </NavContent>
      {onLoginModal && <Login onClose={handleClickLogin} />}
    </Wrap>
  );
};

const defaultStyle = css`
  width: 220px;
`;

const Wrap = styled.div`
  ${defaultStyle}
  height: 100vh;
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
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

const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ProfileName = styled.div`
  ${fonts('text-xxs-regular')};
  color: ${colors.NEUTRAl_600};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Nav;
