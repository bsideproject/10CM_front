import { uploadImage } from 'apis/image';
import { fonts } from 'assets/fonts/fonts';
import { colors } from 'constants/colors';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelIcon } from 'assets/svg/image-cancel.svg';
import Button from '../Button';

interface Props {
  onChange: (d: any) => void;
  value?: string;
}

const AddImageButton: React.FC<Props> = ({ onChange, value }) => {
  const [imageUrl, setImageUrl] = useState('');
  const ref = useRef<HTMLInputElement | null>(null);

  const handleClickButton = () => {
    if (ref.current) {
      ref.current.click();
    }
  };
  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files[0].size <= 1024 * 1024 * 500) {
        try {
          const formData = new FormData();
          formData.append('file', e.target.files[0]);
          const data = await uploadImage(formData);
          setImageUrl(data.original_name);
          onChange(data.image_id);
          e.target.files = null;
        } catch (e) {
          console.log(e);
        }
      } else {
        alert('용량을 줄여주세요!');
      }
    }
  };
  return (
    <div>
      {value ? (
        <UploadImageNameWrap>
          <UploadFileName>{value}</UploadFileName>
          <RemoveButton />
        </UploadImageNameWrap>
      ) : (
        <Label htmlFor="addImage" onClick={handleClickButton}>
          <Button buttonType="outline" buttonWidth="100%" type="button">
            사진 추가
          </Button>
        </Label>
      )}
      <Input
        ref={ref}
        id="addImage"
        name="addImage"
        type="file"
        onChange={handleImageChange}
        accept=".jpg, .png"
      />
    </div>
  );
};
export default AddImageButton;

const Label = styled.label``;
const Input = styled.input`
  display: none;
`;
const UploadImageNameWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 12px;
  border: 1px solid ${colors.BLUE_BASE};
  color: ${colors.BLUE_BASE};
  ${fonts('text-xs-regular')};
  border-radius: 4px;
`;
const UploadFileName = styled.div`
  width: 376px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const RemoveButton = styled(CancelIcon)`
  cursor: pointer;
`;
