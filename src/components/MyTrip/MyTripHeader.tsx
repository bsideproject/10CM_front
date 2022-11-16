import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { sizes } from 'constants/sizes';
import { fonts } from 'assets/fonts/fonts';
import smallNavLogo from 'assets/img/smallNavLogo.svg';
import Img from 'components/Img/Img';
import Button from 'components/common/Button';

const MyTripHeader = () => {
  return (
    <Wrap>
      <Img
        src={smallNavLogo}
        width={sizes.SMALL_LOGO_SIZE}
        height={sizes.SMALL_LOGO_SIZE}
      />
      <ButtonWrap>
        <Button
          buttonType="filled"
          buttonSize="small"
          buttonWidth="67px"
          disabled={false}
        >
          <ButtonText isCancel={false}>저장</ButtonText>
        </Button>
        <Button
          buttonType="outline"
          buttonSize="small"
          buttonWidth="67px"
          disabled={false}
        >
          <ButtonText isCancel>닫기</ButtonText>
        </Button>
      </ButtonWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 64px;
  background: ${colors.WHITE};
  border-bottom: 1px solid ${colors.NEUTRAl_50};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

const ButtonText = styled.div<{ isCancel: boolean }>`
  color: ${props => (props.isCancel ? colors.BLUE_BASE : colors.WHITE)};
  ${fonts('text-sm-bold')};
`;

export default MyTripHeader;
