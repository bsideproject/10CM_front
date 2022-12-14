import React, { FormEvent, useEffect, useState } from 'react';
import Formlabel from 'components/common/Formlabel';
import Input from 'components/common/Input';
import ChangeAddress, {
  ChangeAddressDataFromKakao,
} from 'components/common/Input/ChangeAddress';
import AddImageButton from 'components/common/Input/AddImageButton';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import { MyPlaceResponse, UpdatePlaceBody } from 'dtos/place';
import { updatePlace } from 'apis/place';
import { getTagListToString, getTagToStringArray } from 'utils/plage';
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
  onUpdateComplete: () => Promise<void>;
}

const initialValue = {
  name: '',
  address: '',
  address_detail: '',
  description: '',
  latitude: '',
  longitude: '',
  image: '',
};

const UpdatePost: React.FC<Props> = ({
  onClose,
  addressInfo,
  onUpdateComplete,
}) => {
  const [updateAddress, setUpdateAddress] = useState<
    Omit<UpdatePlaceBody, 'tag' | 'id'>
  >({ ...initialValue });
  const [tag, setTag] = useState(getTagListToString(addressInfo.tag || []));
  const [isLoading, setIsLoading] = useState(false);

  const handleAddressChange = (data: ChangeAddressDataFromKakao) => {
    setUpdateAddress(prev => ({ ...prev, ...data }));
  };
  const handleChangeAddressDetail = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUpdateAddress(prev => ({ ...prev, address_detail: e.target.value }));
  };
  const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdateAddress(prev => ({ ...prev, description: e.target.value }));
  };
  const handleChangeImage = (url: string) => {
    setUpdateAddress(prev => ({ ...prev, image: url }));
  };
  const handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  const handleUpdateClick = async () => {
    setIsLoading(true);
    try {
      await updatePlace({
        id: addressInfo.id,
        ...updateAddress,
        tag: getTagToStringArray(tag),
      });
      await onUpdateComplete();
      onClose();
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    setUpdateAddress({ ...addressInfo });
  }, [addressInfo]);
  return (
    <Modal onClose={onClose}>
      <ModalFormWrap onSubmit={handleSubmit}>
        <ModalFormHeader>
          <div>????????? ????????????</div>
          <CloseButton onClick={onClose} />
        </ModalFormHeader>
        <ModalFormBody>
          <Formlabel label="??????" required labelmargin="4px">
            <AddressInputWrap>
              <ChangeAddress
                value={updateAddress.address}
                onAddressChange={handleAddressChange}
              />
              <Input
                value={updateAddress.address_detail || ''}
                onChange={handleChangeAddressDetail}
              />
            </AddressInputWrap>
          </Formlabel>
          <Formlabel
            label="?????? ??????"
            labelmargin="4px"
            labelWarpperMargin="20px 0 0 0"
          >
            <AddImageButton
              onChange={handleChangeImage}
              value={updateAddress.image}
            />
            <AddImageTip>* 500MB ????????? jpg,png ????????? ??????</AddImageTip>
            <AddImageTip>* ?????? ????????? ?????? n:n</AddImageTip>
          </Formlabel>
          <Formlabel
            label="??????"
            labelmargin="4px"
            labelWarpperMargin="20px 0 0 0"
          >
            <Input
              placeholder="????????? ??????????????????.(ex. #?????? #?????? #?????????)"
              value={tag}
              onChange={handleChangeTag}
            />
          </Formlabel>
          <Formlabel
            label="??????"
            labelmargin="4px"
            labelWarpperMargin="20px 0 0 0"
          >
            <Textarea
              placeholder="????????? ?????? ??????, ????????? ????????? ??????????????????."
              count
              value={updateAddress.description || ''}
              onChange={handleChangeMemo}
            />
          </Formlabel>
        </ModalFormBody>
        <ModalFormFooter>
          <Button
            type="button"
            buttonType="outline"
            onClick={onClose}
            buttonWidth="100%"
          >
            ??????
          </Button>
          <Button type="button" onClick={handleUpdateClick} buttonWidth="100%">
            ??????
          </Button>
        </ModalFormFooter>
      </ModalFormWrap>
    </Modal>
  );
};
export default UpdatePost;
