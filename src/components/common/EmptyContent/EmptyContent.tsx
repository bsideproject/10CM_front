import Img from 'components/Img/Img';
import React from 'react';
import styled from 'styled-components';
import emptyImg from 'assets/img/emptyContent.svg';
import { sizes } from 'constants/sizes';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import Button from 'components/common/Button';
interface IProps {
  onClick: () => void;
}
const EmptyContent: React.FC<IProps> = ({ onClick }) => {
  return (
    <Wrap>
      <Img
        src={emptyImg}
        width={sizes.EMPTY_IMG_SIZE}
        height={sizes.EMPTY_IMG_SIZE}
      />
      <p>{'추가된 장소가 없습니다.\n지도에서 장소를 추가해주세요.'}</p>
      <Button
        buttonType="outline"
        buttonSize="medium"
        buttonWidth="122px"
        onClick={onClick}
        disabled={false}
      >
        여행 만들기
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 39px 0;
  gap: 16px;
  white-space: pre-wrap;
  margin-top: 56px;
  > p {
    ${fonts('text-sm')};
    color: ${colors.NEUTRAl_400};
    text-align: center;
  }
`;

export default EmptyContent;
