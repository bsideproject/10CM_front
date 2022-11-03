import Input from 'components/common/Input';
import React from 'react';
import styled, { css } from 'styled-components';
import { fonts } from 'assets/fonts/fonts';

const AddImgBtn = () => {
  return (
    <Wrap>
      <HeaderText>사진 첨부</HeaderText>
      <InputLable htmlFor="input-file">사진 추가</InputLable>
      <InputFile id="input-file" type="file" />;
      <span>* 500MB 이하의 jpg,png 파일만 가능</span>
    </Wrap>
  );
};

const defaultStyle = css`
  width: 432px;
`;
const Wrap = styled.div`
  ${defaultStyle};
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  gap: 4px;
  height: 107px;
  position: relative;
`;

const HeaderText = styled.span`
  ${fonts('text-sm-bold')};
`;

const InputLable = styled.label`
  position: absolute;
`;

const InputFile = styled.input`
  ${defaultStyle};
  opacity: 0;
  height: 44px;
`;

export default AddImgBtn;
