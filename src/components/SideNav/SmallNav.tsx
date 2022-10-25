import React from "react";
import styled, { css } from "styled-components";

import smallNavLogo from "assets/img/smallNavLogo.svg";
import Img from "components/Img/Img";

const SmallNav: React.FC = () => {
  return (
    <Wrap>
      <LogoWrap>
        <Img src={smallNavLogo} width={"44px"} height={"44px"} />
      </LogoWrap>
      <ul>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
      </ul>
    </Wrap>
  );
};

const defaultStyle = css`
  width: 80px;
`;

const Wrap = styled.div`
  ${defaultStyle}
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    width: 220px;
    transition: 0.4s;
  }
`;

const LogoWrap = styled.div`
  ${defaultStyle}
  height: 100px;
`;

export default SmallNav;
