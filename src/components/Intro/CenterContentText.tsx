import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
interface IProps {
  data: string[];
}
const CenterContentText: React.FC<IProps> = ({ data }) => {
  return (
    <Wrap>
      <TopText>{data[0]}</TopText>
      <DescWrap>
        <MiddleText>{data[1]}</MiddleText>
        <BottomText>{data[2]}</BottomText>
      </DescWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TopText = styled.span`
  display: flex;
  justify-content: center;
  align-center: center;
  ${fonts('caption')};
  color: ${colors.BLUE_BASE};
  letter-spacing: 0.013em;
  background-color: #e2eaff;
  padding: 2px 8px;
  border-radius: 4px;
  width: 86px;
`;

const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiddleText = styled.span`
  ${fonts('title-lg-bold')};
  color: ${colors.NEUTRAl_900};
  letter-spacing: 0.013em;
`;

const BottomText = styled.span`
  ${fonts('text-sm')};
  color: ${colors.NEUTRAl_400};
  letter-spacing: 0.013em;
`;
export default CenterContentText;
