import React, { useEffect, useState } from 'react';
import Formlabel from 'components/common/Formlabel';
import Input from 'components/common/Input';
import ChangeAddress, {
  ChangeAddressDataFromKakao,
} from 'components/common/Input/ChangeAddress';
import AddImageButton from 'components/common/Input/AddImageButton';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import { MyPlaceResponse, UpdatePlaceBody } from 'dtos/place';
import Modal from '../UI/Modal';
import {
  AddImageTip,
  AddressInputWrap,
  CloseButton,
  ModalFormBody,
  ModalFormFooter,
  ModalFormHeader,
  ModalFormWrap,
} from './styles';

interface Props {
  onClose: () => void;
  addressInfo: MyPlaceResponse;
}

const UpdatePost: React.FC<Props> = ({ onClose, addressInfo }) => {
  const [updateAddress, setUpdateAddress] = useState<
    Omit<UpdatePlaceBody, 'tag'>
  >({
    name: addressInfo.name,
    address: addressInfo.address,
    addressDetail: addressInfo.addressDetail,
    description: addressInfo.description,
    latitude: addressInfo.latitude,
    longitude: addressInfo.longitude,
  });
  const [tag, setTag] = useState((addressInfo.tag || []).join(''));

  const handleAddressChange = (data: ChangeAddressDataFromKakao) => {
    setUpdateAddress(prev => ({ ...prev, ...data }));
  };
  const handleChangeAddressDetail = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUpdateAddress(prev => ({ ...prev, addressDetail: e.target.value }));
  };
  const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdateAddress(prev => ({ ...prev, description: e.target.value }));
  };
  const handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  useEffect(() => {
    setUpdateAddress(addressInfo);
  }, [addressInfo]);
  return (
    <Modal onClose={onClose}>
      <ModalFormWrap>
        <ModalFormHeader>
          <div>포스팅 수정하기</div>
          <CloseButton onClick={onClose} />
        </ModalFormHeader>
        <ModalFormBody>
          <Formlabel label="위치" required labelmargin="4px">
            <AddressInputWrap>
              <ChangeAddress
                value={updateAddress.address}
                onAddressChange={handleAddressChange}
              />
              <Input
                value={updateAddress.addressDetail || ''}
                onChange={handleChangeAddressDetail}
              />
            </AddressInputWrap>
          </Formlabel>
          <Formlabel
            label="사진 첨부"
            labelmargin="4px"
            labelWarpperMargin="20px 0 0 0"
          >
            <AddImageButton onChange={(d: any) => console.log(d)} />
            <AddImageTip>* 500MB 이하의 jpg,png 파일만 가능</AddImageTip>
          </Formlabel>
          <Formlabel
            label="태그"
            labelmargin="4px"
            labelWarpperMargin="20px 0 0 0"
          >
            <Input
              placeholder="태그를 입력해주세요.(ex. #비건 #카페 #재즈바)"
              value={tag}
              onChange={handleChangeTag}
            />
          </Formlabel>
          <Formlabel
            label="메모"
            labelmargin="4px"
            labelWarpperMargin="20px 0 0 0"
          >
            <Textarea
              placeholder="장소에 대한 생각, 간략한 설명을 입력해주세요."
              count
              value={updateAddress.description || ''}
              onChange={handleChangeMemo}
            />
          </Formlabel>
        </ModalFormBody>
        <ModalFormFooter>
          <Button buttonType="outline" onClick={onClose} buttonWidth="100%">
            취소
          </Button>
          <Button onClick={() => {}} buttonWidth="100%">
            저장
          </Button>
        </ModalFormFooter>
      </ModalFormWrap>
    </Modal>
  );
};
export default UpdatePost;
