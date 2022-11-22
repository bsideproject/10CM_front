import Textarea from 'components/common/Textarea';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import * as CFG from 'services/config.js';

type Purpose = 'TAG' | 'TRIP';

interface IProps {
  purpose: Purpose;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
const AddTextArea: React.FC<IProps> = ({ purpose, value, onChange }) => {
  const content = CFG.TEXTAREA_DESC[purpose];

  return (
    <Wrap>
      <span>메모</span>
      <Textarea
        placeholder={content.placeholder}
        maxLength={500}
        count
        value={value}
        onChange={onChange}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 432px;
  gap: 4px;
  padding-top: 8px;
  display: flex;
  flex-direction: column;

  > span {
    color: ${colors.NEUTRAl_900};
    letter-spacing: 0.013em;
    ${fonts('text-sm-bold')};
  }
`;

export default AddTextArea;
