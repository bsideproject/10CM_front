import Input from 'components/common/Input';
import Img from 'components/Img/Img';
import React, { useState, MouseEvent } from 'react';
import deleteIcon from 'assets/img/deleteIcon.svg';
import * as CFG from 'services/config.js';
import styled, { css } from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import { sizes } from 'constants/sizes';

const AddImgBtn = () => {
  const [labelText, setLableText] = useState<string>(CFG.INIT_ADD_IMG_LABEL);
  const [file, setFile] = useState<File>();
  const showDeleteBtn = labelText !== CFG.INIT_ADD_IMG_LABEL;

  const handleInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    const { size, name } = files;

    if (size > CFG.FILE_SIZE_MAX_LIMIT) {
      target.value = '';
      // alert
      return;
    }

    setLableText(name);

    // 정상적으로 통과 한다면
    setFile(files);
    // ref: https://velog.io/@mjhyp88/ReactTypscript-%ED%8C%8C%EC%9D%BC%EC%97%85%EB%A1%9C%EB%93%9C-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84With.-Springboot
  };

  const handleInitText = () => {
    setLableText('사진 추가');
  };
  return (
    <Wrap>
      <HeaderText>사진 첨부</HeaderText>
      <InputLable htmlFor="input-file" showBtn={showDeleteBtn}>
        <span>{labelText}</span>
        {showDeleteBtn && (
          <Img
            src={deleteIcon}
            width={sizes.CLOSE_BTN_SIZE}
            height={sizes.CLOSE_BTN_SIZE}
            padding="0 9px 0 0"
            onClick={handleInitText}
          />
        )}
      </InputLable>
      <InputFile
        id="input-file"
        type="file"
        accept="image/png, image/jpg"
        onChange={handleInputFile}
        showBtn={showDeleteBtn}
      />
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

const InputLable = styled.label<{ showBtn: boolean }>`
  position: absolute;
  width: 99.5%;
  border: 1px solid ${colors.BLUE_BASE};
  border-radius: 4px;
  color: ${colors.BLUE_BASE};
  top: 38px;
  height: 44px;
  display: flex;
  justify-content: ${props => (props.showBtn ? 'space-between' : 'center')};
  align-items: center;
  > span {
    pointer-events: ${props => (props.showBtn ? 'none' : 'auto')};
    padding-left: 9px;
  }
`;

const InputFile = styled.input<{ showBtn: boolean }>`
  ${defaultStyle};
  opacity: 0;
  height: 44px;
  cursor: pointer;
  /* pointer-events: ${props => (props.showBtn ? 'none' : 'auto')}; */
  display: ${props => (props.showBtn ? 'none' : 'block')};
`;

const WarningText = styled.span`
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
`;

export default AddImgBtn;
