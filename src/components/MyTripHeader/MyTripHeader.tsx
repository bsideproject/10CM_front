import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { sizes } from 'constants/sizes';
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
        <Button>a</Button>
        <Button>b</Button>
      </ButtonWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 64px;
  background: ${colors.WHITE};
  border-bottom: 1px solid ${colors.NEUTRAl_50};
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default MyTripHeader;
