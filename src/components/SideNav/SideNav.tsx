import React from 'react';
import styled, { css } from 'styled-components';
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

const Wrap = styled.div`
  ${defaultStyle}
  height: 100%;
  display: flex;
  flex-direction: column;

  .hover-open {
    display: block;
  }

  .hover-hidden {
    display: none;
  }

  &:hover {
    .hover-hidden {
      /* display: none; */
    }
    .hover-open {
      /* display: block; */
    }
  }
`;

export default SideNav;

// width: 220px;
// transition: 0.4s;
// hover로 처리
