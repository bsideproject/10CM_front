/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { colors } from 'constants/colors';
import Img from 'components/Img/Img';
import { fonts } from 'assets/fonts/fonts';
import * as CFG from 'services/config.js';
import defaultLoginImg from 'assets/img/defaultLoginImg.svg';
import navLogo from 'assets/img/navLogo.svg';
import smallRightArrowBtn from 'assets/img/smallRightArrowBtn.svg';
import Login from 'components/common/ModalContents/Login';
import { useNavigate } from 'react-router-dom';
import { user } from 'dtos/userInfo';
import { shallowEqual } from 'react-redux';
import { useAppSelect } from 'store/configureStore.hooks';
import { routePath } from 'constants/route';
import ImgLists from './ImgLists';
interface IProps {
  className?: string;
}

const Nav: React.FC<IProps> = ({ className }) => {
  const [onLoginModal, setOnLoginModal] = useState(false);
  const navigate = useNavigate();
  const { nickname, profile_image_url: profileImg } = useAppSelect(
    state => state.authInfo.info,
    shallowEqual,
  );

  const isLogin = !!localStorage.getItem('accessToken');

  const handleClickText = () => {
    return isLogin
      ? navigate(routePath.MY_PAGE)
      : setOnLoginModal(!onLoginModal);
  };

  return (
    <Wrap className={className}>
      <NavContent>
        <LogoWrap>
          <Img src={navLogo} width="122px" height="32px" />
        </LogoWrap>
        <MenuWrap>
          <UserProfile>
            <Img
              src={profileImg || defaultLoginImg}
              width="64px"
              height="64px"
              borderRadius="50%"
            />
            <ProfileWrap onClick={handleClickText}>
              <ProfileName>{nickname || '로그인'}</ProfileName>
              <Img src={smallRightArrowBtn} width="20px" height="20px" />
            </ProfileWrap>
          </UserProfile>
          <ImgLists listsData={CFG.NAV_DESC} isNav />
          <ImgLists listsData={CFG.NAV_DESC_SEC} isNav />
        </MenuWrap>
      </NavContent>
      {onLoginModal && <Login onClose={handleClickText} />}
    </Wrap>
  );
};
// 마이페이지 가는 로직 구성해야함
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
