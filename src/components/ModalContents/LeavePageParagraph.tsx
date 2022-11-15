import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';

const LeavePageParagraph = () => {
  return (
    <Paragraph>
      {'페이지를 나가시겠습니까?\n입력된 정보는 저장되지 않습니다.'}
    </Paragraph>
  );
};

const Paragraph = styled.p`
  ${fonts('text-sm-regular')};
  color: ${colors.NEUTRAl_600};
  letter-spacing: 0.013em;
  text-align: center;
  white-space: pre-wrap;
  width: 218px;
`;
export default LeavePageParagraph;
