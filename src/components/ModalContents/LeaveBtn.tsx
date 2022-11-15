import Button from 'components/common/Button';
import React from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';

const LeaveBtn = () => {
  return (
    <Wrap>
      <Button
        buttonType="filled"
        buttonSize="small"
        buttonWidth="114px"
        disabled={false}
      >
        <ButtonText isCancel={false}>네, 나갈래요</ButtonText>
      </Button>
      <Button
        buttonType="outline"
        buttonSize="small"
        buttonWidth="80px"
        disabled={false}
      >
        <ButtonText isCancel>아니오</ButtonText>
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 202px;
`;

const ButtonText = styled.div<{ isCancel: boolean }>`
  color: ${props => (props.isCancel ? colors.BLUE_BASE : colors.WHITE)};
  ${fonts('text-xs-bold')};
  letter-spacing: 0.013em;
`;

export default LeaveBtn;
