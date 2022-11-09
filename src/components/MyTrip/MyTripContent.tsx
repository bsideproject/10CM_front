import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
const MyTripContent: React.FC = () => {
  return (
    <Wrap>
      <Header>
        <HeaderText>나의 여행 (N)</HeaderText>
        <Button
          buttonType="filled"
          buttonSize="medium"
          buttonWidth="160px"
          disabled={false}
        >
          <ButtonText>새로운 여행 만들기</ButtonText>
        </Button>
      </Header>
    </Wrap>
  );
};

const Wrap = styled.div`
  flex: 1;
  padding-top: 45px;
  width: 100%;
  background-color: yellow;
  padding: 45px 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.span`
  ${fonts('title-lg-bold')};
  color: #000000;
`;

const ButtonText = styled.span`
  ${fonts('text-sm-bold')};
  color: ${colors.WHITE};
  letter-spacing: 0.013em;
`;

export default MyTripContent;
