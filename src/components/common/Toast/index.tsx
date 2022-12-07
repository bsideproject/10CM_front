import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const Toast = () => {
  return <Wrap />;
};

const Wrap = styled.div`
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  background: ${colors.NEUTRAl_800};
  border-radius: 4px;
`;

export default Toast;
