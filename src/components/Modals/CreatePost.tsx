import Modal from 'components/UI/Modal';
import { colors } from 'constants/colors';
import { KakaoAddress } from 'dtos/kakao';
import React, { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { fonts } from 'assets/fonts/fonts';
import Input from 'components/common/Input';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import { createPlace, getPlace } from 'apis/place';
import { MyPlaceResponse } from 'dtos/place';
import AddImageButton from 'components/common/Input/AddImageButton';
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

interface Test {
  memo: string;
  tag: string;
}

const CreatePost: React.FC<Props> = ({
  addressInfo,
  keyword,
  onClose,
  onCreateComplete,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [test, setTest] = useState<Test>({ memo: '', tag: '' });

  const [addressDetail, setAddressDetail] = useState('');

  const handleMemoChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTest(prev => ({ ...prev, memo: e.target.value }));
    },
    [],
  );
  const handleTagChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTest(prev => ({ ...prev, tag: e.target.value }));
    },
    [],
  );
  const handleAddressDetailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(e.target.value);
  };
  const handleSaveClick = async () => {
    setIsLoading(true);
    try {
      const data = await createPlace({
        name: keyword,
        address: addressInfo.road_address_name,
        longitude: addressInfo.x.toString(),
        latitude: addressInfo.y.toString(),
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
      <ModalFormWrap>
        <ModalFormHeader>
          <div>나의 관심장소 추가하기</div>
          <CloseButton onClick={onClose} />
        </ModalFormHeader>
        <ModalFormBody>
          <CreatePostLabel>위치</CreatePostLabel>
          <AddressInputWrap>
            <Input disabled value={addressInfo.road_address_name} readOnly />
            <Input value={addressDetail} onChange={handleAddressDetailChange} />
          </AddressInputWrap>
          <AddImageWrap>
            <CreatePostLabel>사진 첨부</CreatePostLabel>
            <AddImageButton onChange={(d: any) => console.log(d)} />
            <AddImageTip>* 500MB 이하의 jpg,png 파일만 가능</AddImageTip>
          </AddImageWrap>
          <TagWrap>
            <CreatePostLabel>태그</CreatePostLabel>
            <Input
              placeholder="태그를 입력해주세요.(ex. #비건 #카페 #재즈바)"
              value={test.tag}
              onChange={handleTagChange}
            />
          </TagWrap>
          <MemoWrap>
            <CreatePostLabel>메모</CreatePostLabel>
            <Textarea
              placeholder="장소에 대한 생각, 간략한 설명을 입력해주세요."
              count
              value={test.memo}
              onChange={handleMemoChange}
            />
          </MemoWrap>
        </ModalFormBody>
        <ModalFormFooter>
          <Button buttonType="outline" buttonWidth="100%" onClick={onClose}>
            취소
          </Button>
          <Button onClick={handleSaveClick} buttonWidth="100%">
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
