import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  src: any;
  width: string;
  height: string;
  padding?: string;
  onClick?: () => void;
}

interface ImgProps {
  width: string;
  height: string;
  padding: string;
  cursor: boolean;
}

const Img: React.FC<IProps> = ({ src, width, height, padding, onClick }) => {
  return (
    <MyImg
      src={src}
      alt="logo"
      width={width}
      height={height}
      padding={padding || '0'}
      onClick={onClick}
      cursor={typeof onClick === 'function'}
    />
  );
};

const MyImg = styled.img<ImgProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  cursor: ${props => (props.cursor ? 'pointer' : undefined)};
`;

export default Img;
