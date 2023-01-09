import { colors } from 'constants/colors';
import React from 'react';
import toastImg from 'assets/img/toastCheckedImg.svg';
import styled from 'styled-components';
import { sizes } from 'constants/sizes';
import Img from 'components/Img/Img';
import { fonts } from 'assets/fonts/fonts';
interface IProps {
  toastText: string;
}
const Toast: React.FC<IProps> = ({ toastText }) => {
  return (
    <Wrap>
      <Img
        src={toastImg}
        width={sizes.TOAST_CHECKED_SIZE}
        height={sizes.TOAST_CHECKED_SIZE}
      />
      <span>{toastText}</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  width: 657px;
  top: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  background: ${colors.NEUTRAl_800};
  border-radius: 4px;

  > span {
    ${fonts('text-sm')};
    color: ${colors.WHITE};
    letter-spacing: 0.013em;
  }
`;

export default Toast;
