import Input from 'components/common/Input';
import React from 'react';
import styled, { css } from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';

const AddImgBtn = () => {
  return (
    <Wrap>
      <HeaderText>사진 첨부</HeaderText>
      <InputLable htmlFor="input-file">사진 추가</InputLable>
      <InputFile id="input-file" type="file" accept="image/png, image/jpg" />
      <WarningText>* 500MB 이하의 jpg,png 파일만 가능</WarningText>
    </Wrap>
  );
};
// Todo: 사진 추가 시, inputlable 텍스트 변경해야 함.
const defaultStyle = css`
  width: 100%;
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
  width: 99.5%;
  border: 1px solid ${colors.BLUE_BASE};
  border-radius: 4px;
  color: ${colors.BLUE_BASE};
  top: 38px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputFile = styled.input`
  ${defaultStyle};
  opacity: 0;
  height: 44px;
  cursor: pointer;
`;

const WarningText = styled.span`
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
`;

export default AddImgBtn;
