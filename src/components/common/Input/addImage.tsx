import React, { useCallback } from 'react';
import styled from 'styled-components';
import Button from '../Button';

interface Props {}

const AddImage: React.FC<Props> = () => {
  const buttonStyle = useCallback((): React.CSSProperties => {
    return {
      width: '100%',
    };
  }, []);
  return (
    <Label htmlFor="addImage">
      <Button buttonType="outline" style={buttonStyle()}>
        사진 추가
      </Button>
      <Input id="addImage" type="file" />
    </Label>
  );
};
export default AddImage;

const Label = styled.label``;
const Input = styled.input`
  display: none;
`;
