import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Nav from './Nav';
import SmallNav from './SmallNav';

const SideNav: React.FC = () => {
  return (
    <Wrap>
      <SmallNav className="hover-hidden" />
      <Nav className="hover-open" />
    </Wrap>
  );
};

const defaultStyle = css`
  width: 80px;
`;

const navSlide = keyframes`
  0% {
    width: 0px;
    /* left: -50px; */
  }

  100% {
    width: 220px;
    /* left: 50px; */
  }
`;

const Wrap = styled.div`
  ${defaultStyle}
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .hover-open {
    position: fixed;
    left: 0;
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .hover-hidden {
    /* display: none; */
  }

  &:hover {
    .hover-hidden {
      display: none;
    }

    .hover-open {
      position: static;
      pointer-events: auto;
      opacity: 1;
      animation-duration: 0.2s;
      animation-name: ${navSlide};
    }
  }
`;

export default SideNav;

// ref: https://songsong.dev/entry/css-display-none-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EC%88%98%EC%A0%95%ED%95%98%EA%B8%B0

// width: 220px
