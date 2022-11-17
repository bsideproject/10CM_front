import React, { useCallback } from 'react';
import styled from 'styled-components';
import Button from '../Button';

interface Props {
  onChange: (d: any) => void;
}

const AddImageButton: React.FC<Props> = () => {
  return (
    <Label htmlFor="addImage">
      <Button buttonType="outline" buttonWidth="100%" type="button">
        사진 추가
      </Button>
      <Input id="addImage" name="addImage" />
    </Label>
  );
};
export default AddImageButton;

const Label = styled.label``;
const Input = styled.input`
  /* display: none; */
`;
