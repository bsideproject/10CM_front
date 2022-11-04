import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
type BtnSize = 'small' | 'medium' | 'large';
interface IProps {
  btnText: string;
  btnSize: BtnSize;
}
const ModalButton: React.FC<IProps> = ({ btnText, btnSize }) => {
  return (
    <Wrap>
      <Button buttonType="outline" buttonSize={btnSize} disabled={false}>
        <ButtonText isCancel>취소</ButtonText>
      </Button>
      <Button buttonType="filled" buttonSize={btnSize} disabled={false}>
        <ButtonText isCancel={false}>{btnText}</ButtonText>
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ButtonText = styled.div<{ isCancel: boolean }>`
  color: ${props => (props.isCancel ? colors.BLUE_BASE : colors.WHITE)};
`;
// Todo: 버튼 텍스트의 패딩으로 버튼크기를 맞추어야 함. 수정 필요
export default ModalButton;
