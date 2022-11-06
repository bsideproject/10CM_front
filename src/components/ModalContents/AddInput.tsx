import Input from 'components/common/Input';
import React from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import * as CFG from 'services/config.js';
type Purpose = 'TAG' | 'TRIP';
interface IProps {
  purpose: Purpose;
}
const AddInput: React.FC<IProps> = ({ purpose }) => {
  const content = CFG.INPUT_DESC[purpose];

  return (
    <Wrap>
      <span>{content.text}</span>
      <Input placeholder={content.placeholder} />
    </Wrap>
  );
};

const Wrap = styled.div`
  padding-top: 8px;
  gap: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;

  > span {
    ${fonts('text-sm-bold')};
    letter-spacing: 0.013em;
    color: ${colors.NEUTRAl_900};
  }
`;

export default AddInput;
