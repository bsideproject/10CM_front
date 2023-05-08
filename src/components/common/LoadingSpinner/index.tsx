import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingSpinner = () => {
  return (
    <LoadingWrap>
      <Spinner />
    </LoadingWrap>
  );
};

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 1.5px solid lightgrey;
  border-top: 1.5px solid black;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export default LoadingSpinner;