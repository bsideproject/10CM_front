import React from 'react';
import styled from 'styled-components';
interface IProps {
  nav: React.ReactElement;
  banner: React.ReactElement;
  content: React.ReactElement;
}

const HomeLayout: React.FC<IProps> = ({ nav, banner, content }) => {
  return (
    <Layout>
      {nav}
      <Wrap>
        {banner}
        {content}
      </Wrap>
    </Layout>
  );
};

const Layout = styled.div`
  height: 100vh;
  width: 1200px;
  margin: 0 auto;
  display: flex;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 980px;
`;

export default HomeLayout;

// 1. fixed로 header설정
