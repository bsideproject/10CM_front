import React from "react";
import styled, { css } from "styled-components";
import SmallNav from "./SmallNav";

const SideNav = () => {
  return (
    <Wrap>
      <SmallNav />
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
    .hover-status {
      display: none;
    }
  }
`;

export default SideNav;

// width: 220px;
// transition: 0.4s;
// hover로 처리
