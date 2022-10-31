import React from "react";
import styled, { css } from "styled-components";

import smallNavLogo from "assets/img/smallNavLogo.svg";
import profileImg from "assets/img/profileImg.svg";
import Img from "components/Img/Img";

const SmallNav: React.FC = () => {
  return (
    <Wrap className="hover-status">
      <LogoWrap>
        <Img
          src={smallNavLogo}
          width="44px"
          height="44px"
          padding="28px 18px"
        />
      </LogoWrap>
      <MenuWrap>
        <UserProfile>
          <Img src={profileImg} width="48px" height="44px" />
        </UserProfile>
        <ul>
          <li>test1</li>
          <li>test2</li>
          <li>test3</li>
        </ul>
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

  &:hover {
    width: 220px;
    transition: 0.4s;
  }
`;

const LogoWrap = styled.div`
  ${defaultStyle};
  height: 100px;
`;

const MenuWrap = styled.div`
  ${defaultStyle};
  height: 406px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 18px 0px;
`;

export default SmallNav;
