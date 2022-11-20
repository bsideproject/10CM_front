import { uploadImage } from 'apis/image';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useRef,
} from 'react';
import styled from 'styled-components';
import Button from '../Button';

interface Props {
  onChange: (d: any) => void;
}

const AddImageButton: React.FC<Props> = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleClickButton = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files) {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      await uploadImage(formData);
    }
  };
  return (
    <div>
      <Label htmlFor="addImage" onClick={handleClickButton}>
        <Button buttonType="outline" buttonWidth="100%" type="button">
          사진 추가
        </Button>
      </Label>
      <Input
        ref={ref}
        id="addImage"
        name="addImage"
        type="file"
        onChange={handleImageChange}
      />
    </div>
  );
};
export default AddImageButton;

const Label = styled.label``;
const Input = styled.input`
  display: none;
`;
