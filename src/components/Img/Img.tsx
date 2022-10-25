import React from "react";
import styled, { css } from "styled-components";

interface IProps {
  src: any;
  width: string;
  height: string;
}

const Img: React.FC<IProps> = ({ src, width, height }) => {
  return <MyImg src={src} alt="logo" width={width} height={height} />;
};

const MyImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 28px 18px;
`;

// padding은 수정되어야 함.
export default Img;
