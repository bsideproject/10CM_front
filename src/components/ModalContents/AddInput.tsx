import Input from 'components/common/Input';
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import * as CFG from 'services/config.js';
type Purpose = 'TAG' | 'TRIP';
interface IProps {
  purpose: Purpose;
  title?: string;
  onChangeTitle?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const AddInput: React.FC<IProps> = ({ purpose, title, onChangeTitle }) => {
  const content = CFG.INPUT_DESC[purpose];

  return (
    <Wrap>
      <span>{content.text}</span>
      <Input
        placeholder={content.placeholder}
        maxLength={20}
        count
        value={title}
        onChange={onChangeTitle}
      />
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
