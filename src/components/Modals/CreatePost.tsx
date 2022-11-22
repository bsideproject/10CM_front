import Modal from 'components/UI/Modal';
import { colors } from 'constants/colors';
import { KakaoAddress } from 'dtos/kakao';
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useCallback,
  useState,
} from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import Input from 'components/common/Input';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import { createPlace, getPlace } from 'apis/place';
import { CreatePlaceBody, MyPlaceResponse } from 'dtos/place';
import AddImageButton from 'components/common/Input/AddImageButton';
import { getTagToStringArray } from 'utils/plage';
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
  addressInfo: KakaoAddress;
  keyword: string;
  onClose: () => void;
  onCreateComplete: (info: MyPlaceResponse) => void;
}

const initialFormData = {
  name: '',
  address: '',
  description: '',
  addressDetail: '',
  latitude: '',
  longitude: '',
  image: '',
};

const CreatePost: React.FC<Props> = ({
  addressInfo,
  keyword,
  onClose,
  onCreateComplete,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Omit<CreatePlaceBody, 'tag'>>({
    ...initialFormData,
  });
  const [tag, setTag] = useState('');

  const handleMemoChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      console.log('good', e.target.value);
      setFormData(prev => ({ ...prev, description: e.target.value }));
    },
    [],
  );
  const handleTagChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTag(e.target.value);
    },
    [],
  );
  const handleChangeImage = (url: string) => {
    setFormData(prev => ({ ...prev, image: url }));
  };
  const handleAddressDetailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, address_detail: e.target.value }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  const handleSaveClick = async () => {
    setIsLoading(true);
    try {
      const tagList = getTagToStringArray(tag);
      const data = await createPlace({
        name: keyword,
        address: addressInfo.road_address_name,
        address_detail: formData.address_detail,
        description: formData.description,
        longitude: addressInfo.x.toString(),
        latitude: addressInfo.y.toString(),
        image: formData.image,
        tag: tagList,
      });
      const createAddressInfo = await getPlace(data.id);
      onCreateComplete(createAddressInfo);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(true);
  };

  return (
    <Modal onClose={onClose}>
      <ModalFormWrap onSubmit={handleSubmit}>
        <ModalFormHeader>
          <div>나의 관심장소 추가하기</div>
          <CloseButton onClick={onClose} />
        </ModalFormHeader>
        <ModalFormBody>
          <CreatePostLabel>위치</CreatePostLabel>
          <AddressInputWrap>
            <Input disabled value={addressInfo.road_address_name} readOnly />
            <Input
              value={formData.address_detail}
              onChange={handleAddressDetailChange}
            />
          </AddressInputWrap>
          <AddImageWrap>
            <CreatePostLabel>사진 첨부</CreatePostLabel>
            <AddImageButton
              value={formData.image}
              onChange={handleChangeImage}
            />
            <AddImageTip>* 500MB 이하의 jpg,png 파일만 가능</AddImageTip>
          </AddImageWrap>
          <button onClick={() => getTagToStringArray(tag)}>태그 체크</button>
          <TagWrap>
            <CreatePostLabel>태그</CreatePostLabel>
            <Input
              placeholder="태그를 입력해주세요.(ex. #비건 #카페 #재즈바)"
              value={tag}
              onChange={handleTagChange}
            />
          </TagWrap>
          <MemoWrap>
            <CreatePostLabel>메모</CreatePostLabel>
            <Textarea
              placeholder="장소에 대한 생각, 간략한 설명을 입력해주세요."
              count
              value={formData.description}
              onChange={handleMemoChange}
            />
          </MemoWrap>
        </ModalFormBody>
        <ModalFormFooter>
          <Button
            type="button"
            buttonType="outline"
            buttonWidth="100%"
            onClick={onClose}
          >
            취소
          </Button>
          <Button type="button" onClick={handleSaveClick} buttonWidth="100%">
            저장
          </Button>
        </ModalFormFooter>
      </ModalFormWrap>
    </Modal>
  );
};
export default CreatePost;

const CreatePostLabel = styled.div`
  ${fonts('text-sm-bold')};
  color: ${colors.NEUTRAl_900};
  margin-bottom: 4px;
`;

const AddImageWrap = styled.div`
  margin-top: 28px;
`;

const TagWrap = styled.div`
  margin-top: 28px;
`;
const MemoWrap = styled.div`
  margin-top: 28px;
`;
