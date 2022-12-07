import Input from 'components/common/Input';
import Img from 'components/Img/Img';
import React, { useState, useEffect } from 'react';
import { ReactComponent as CancelSvg } from 'assets/svg/input-cancel.svg';
import * as CFG from 'services/config.js';
import styled, { css } from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import { sizes } from 'constants/sizes';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import { setImg } from 'store/modules/placeInfo';
import { uploadImage } from 'apis/image';
interface IProps {
  setUrl: React.Dispatch<React.SetStateAction<any>>;
}
const AddImgBtn: React.FC<IProps> = ({ setUrl }) => {
  const [labelText, setLableText] = useState<string>(CFG.INIT_ADD_IMG_LABEL);
  // const [file, setFile] = useState<File>();
  const showDeleteBtn = labelText !== CFG.INIT_ADD_IMG_LABEL;
  const dispatch = useAppDispatch();
  const { img } = useAppSelect(state => state.placeInfo);
  useEffect(() => {
    if (img.originalName) {
      setLableText(img.originalName);
    }
  }, []);
  const handleInputFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    const { size, name } = files;

    if (size > CFG.FILE_SIZE_MAX_LIMIT) {
      alert('파일 용량이 500MB를 넘을 수 없습니다.');
      target.value = '';
      return;
    }

    setLableText(name);
    // 정상적으로 통과 한다면
    const formData = new FormData();
    formData.append('file', files);
    const data = await uploadImage(formData).catch(() => {
      alert('이미지 업로드에 실패하였습니다.');
      setLableText('');
    });
    console.log(data);
    if (data) {
      setUrl({ originalName: data.original_name, url: data.url });
    }
  };

  const handleInitText = () => {
    setUrl('');
    setLableText(CFG.INIT_ADD_IMG_LABEL);
  };
  return (
    <Wrap>
      <HeaderText>사진 첨부</HeaderText>
      {showDeleteBtn && <CancelIcon onClick={handleInitText} />}
      <InputLable htmlFor="input-file" showBtn={showDeleteBtn}>
        <span>{labelText}</span>
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
  // width: ${props => (props.showBtn ? '90%' : '99.5%')};
  width: 99.5%;
  border: 1px solid ${colors.BLUE_BASE};
  border-radius: 4px;
  color: ${colors.BLUE_BASE};
  top: 38px;
  height: 44px;
  display: flex;
  justify-content: ${props => (props.showBtn ? 'flex-start' : 'center')};
  align-items: center;
  pointer-events: ${props => (props.showBtn ? 'none' : 'auto')};
  > span {
    padding-left: ${props => (props.showBtn ? '9px' : undefined)};
  }
`;

const InputFile = styled.input<{ showBtn: boolean }>`
  ${defaultStyle}
  opacity: 0;
  height: 44px;
  cursor: pointer;
  pointer-events: ${props => (props.showBtn ? 'none' : 'auto')};
  width: ${props => (props.showBtn ? '90%' : '100%')};
`;

const WarningText = styled.span`
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
`;

const CancelIcon = styled(CancelSvg)`
  width: 24px;
  height: 24px;
  margin-right: 9px;
  position: absolute;
  top: 49px;
  right: 0;
  cursor: pointer;
`;
export default AddImgBtn;
