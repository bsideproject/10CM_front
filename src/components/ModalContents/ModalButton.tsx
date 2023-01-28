import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
type BtnSize = 'small' | 'medium' | 'large';
interface IProps {
  btnText: string;
  btnSize: BtnSize;
  btnWidth: string;
  isOne?: boolean;
  isLogout?: boolean;
  onClick?: () => void;
  onClose?: () => void;
}
const ModalButton: React.FC<IProps> = ({
  btnText,
  btnSize,
  btnWidth,
  isOne,
  isLogout,
  onClose,
  onClick,
}) => {
  const isFullSize = isOne;
  return (
    <Wrap btnSize={btnSize} isLogout={isLogout}>
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
            <ButtonText isCancel onClick={onClose}>
              취소
            </ButtonText>
          </Button>
          <Button
            buttonType="filled"
            buttonSize={btnSize}
            buttonWidth={btnWidth}
            disabled={false}
            onClick={onClick}
          >
            <ButtonText isCancel={false}>{btnText}</ButtonText>
          </Button>
        </>
      )}
    </Wrap>
  );
};

const Wrap = styled.div<{ btnSize: string; isLogout?: boolean }>`
  width: ${props => (props.btnSize === 'medium' ? '160px' : '100%')};
  display: flex;
  justify-content: ${({ isLogout }) => (isLogout ? 'center' : 'space-between')};
  gap: ${({ isLogout }) => (isLogout ? '8px' : undefined)};
`;

const ButtonText = styled.div<{ isCancel: boolean }>`
  color: ${props => (props.isCancel ? colors.BLUE_BASE : colors.WHITE)};
  ${fonts('text-sm-bold')};
`;
// Todo: 버튼 텍스트의 패딩으로 버튼크기를 맞추어야 함. 수정 필요
export default ModalButton;
