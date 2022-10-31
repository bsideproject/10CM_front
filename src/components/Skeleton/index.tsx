import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  style?: React.CSSProperties;
  type?: 'blink' | 'flow';
}

const Skeleton: React.FC<Props> = ({ style, type }) => {
  if (type === 'blink') {
    return <SkeletonBlink style={style} />;
  }
  return (
    <SkeletonWrap style={style}>
      <SkeletonAnimation />
    </SkeletonWrap>
  );
};
export default Skeleton;

const flow = keyframes`
  0% {
    transform: translateX(-100%);
  }
<<<<<<< HEAD
  20% {
    transform: translateX(-300px);
=======
  80% {
    transform: translateX(200%);
>>>>>>> develop
  }
  100% {
    transform: translateX(200%);
  }
`;
const blink = keyframes`
  0% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
`;
const SkeletonWrap = styled.div`
  width: 200px;
  height: 100px;
  background-color: rgba(230, 230, 230);
  overflow: hidden;
  position: relative;
`;
const SkeletonBlink = styled(SkeletonWrap)`
  animation-name: ${blink};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
`;

const SkeletonAnimation = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(230, 230, 230, 0.2) 0%,
    rgba(242, 242, 242, 0.8) 50%,
    rgba(230, 230, 230, 0.2) 100%
  );
  transform: translateX(-100%);
  animation-name: ${flow};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;
