import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'assets/svg/close.svg';

export const ModalFormWrap = styled.form`
  width: 480px;
  padding: 24px;
  background-color: ${colors.WHITE};
  border-radius: 8px;
`;

export const ModalFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${fonts('title-md-bold')};
  color: ${colors.NEUTRAl_900};
`;
export const ModalFormBody = styled.div`
  margin-top: 32px;
`;

export const CloseButton = styled(CloseIcon)`
  width: 32px;
  height: 32px;
  fill: black;
  cursor: pointer;
`;
export const AddressInputWrap = styled.div`
  > * + * {
    margin-top: 4px;
  }
`;
export const AddImageTip = styled.div`
  margin-top: 2px;
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
`;
export const ModalFormFooter = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 8px;
`;
