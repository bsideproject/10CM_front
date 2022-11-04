import Input from 'components/common/Input';
import React from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
const TagInput: React.FC = () => {
  const exampleText = '태그를 입력해주세요. (ex. #비건 #카페 #재즈바)';

  return (
    <Wrap>
      <span>태그</span>
      <Input placeholder={exampleText} />
    </Wrap>
  );
};

const Wrap = styled.div`
  padding-top: 8px;
  gap: 4px;
  width: 432px;
  display: flex;
  flex-direction: column;

  > span {
    ${fonts('text-sm-bold')};
    letter-spacing: 0.013em;
    color: ${colors.NEUTRAl_900};
  }
`;

export default TagInput;
