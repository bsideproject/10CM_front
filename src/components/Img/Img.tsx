import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  src: any;
  width: string;
  height: string;
  padding?: string;
  background?: string;
  borderRadius?: string;
  onClick?: () => void;
}

interface ImgProps {
  width: string;
  height: string;
  padding: string;
  cursor: string;
  background?: string;
  borderRadius?: string;
}

const Img: React.FC<IProps> = ({
  src,
  width,
  height,
  padding,
  background,
  borderRadius,
  onClick,
}) => {
  return (
    <MyImg
      src={src}
      alt="logo"
      width={width}
      height={height}
      padding={padding || '0'}
      background={background}
      borderRadius={borderRadius}
      onClick={onClick}
      cursor={typeof onClick === 'function' ? 'pointer' : 'default'}
    />
  );
};

const MyImg = styled.img<ImgProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  cursor: ${props => props.cursor};
  background: ${props => props.background};
  border-radius: ${props => props.borderRadius};
  object-fit: cover;
`;

export default Img;
