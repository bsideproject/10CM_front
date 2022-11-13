import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
type BtnSize = 'full' | 'small' | 'medium' | 'large';
interface IProps {
  btnText: string;
  btnSize: BtnSize;
  btnWidth: string;
  onClick?: () => void;
}
const ModalButton: React.FC<IProps> = ({
  btnText,
  btnSize,
  btnWidth,
  onClick,
}) => {
  const isFullSize = btnSize === 'full';
  return (
    <Wrap btnSize={btnSize}>
      {isFullSize && (
        <Button
          buttonType="filled"
          buttonSize={btnSize}
          buttonWidth={btnWidth}
          disabled={false}
          onClick={onClick}
        >
          <ButtonText isCancel={false}>{btnText}</ButtonText>
        </Button>
      )}
      {!isFullSize && (
        <>
          <Button
            buttonType="outline"
            buttonSize={btnSize}
            buttonWidth={btnWidth}
            disabled={false}
          >
            <ButtonText isCancel>취소</ButtonText>
          </Button>
          <Button
            buttonType="filled"
            buttonSize={btnSize}
            buttonWidth={btnWidth}
            disabled={false}
          >
            <ButtonText isCancel={false}>{btnText}</ButtonText>
          </Button>
        </>
      )}
    </Wrap>
  );
};

const Wrap = styled.div<{ btnSize: string }>`
  width: ${props => (props.btnSize === 'medium' ? '160px' : '100%')};
  display: flex;
  justify-content: space-between;
`;

const ButtonText = styled.div<{ isCancel: boolean }>`
  color: ${props => (props.isCancel ? colors.BLUE_BASE : colors.WHITE)};
  ${fonts('text-sm-bold')};
`;
// Todo: 버튼 텍스트의 패딩으로 버튼크기를 맞추어야 함. 수정 필요
export default ModalButton;
