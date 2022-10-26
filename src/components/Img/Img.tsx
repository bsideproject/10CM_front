import React from "react";
import styled, { css } from "styled-components";

interface IProps {
  src: any;
  width: string;
  height: string;
  padding?: string;
}

interface ImgProps {
  width: string;
  height: string;
  padding: string;
}

const Img: React.FC<IProps> = ({ src, width, height, padding }) => {
  return (
    <MyImg
      src={src}
      alt="logo"
      width={width}
      height={height}
      padding={padding || "0"}
    />
  );
};

const MyImg = styled.img<ImgProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
`;

// padding은 수정되어야 함.
export default Img;
