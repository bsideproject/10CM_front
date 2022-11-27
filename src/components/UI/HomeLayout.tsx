import React from 'react';
import styled from 'styled-components';
interface IProps {
  nav: React.ReactElement;
  content: React.ReactElement;
}

const HomeLayout: React.FC<IProps> = ({ nav, content }) => {
  return (
    <Layout>
      {nav}
      <Wrap>{content}</Wrap>
    </Layout>
  );
};

const Layout = styled.div`
  height: 100%;
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
