import Modal from 'components/UI/Modal';
import { colors } from 'constants/colors';
import { KakaoAddress } from 'dtos/kakao';
import React, { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'assets/svg/close.svg';
import { fonts } from 'assets/fonts/fonts';
import Input from 'components/common/Input';
import AddImage from 'components/common/Input/addImage';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import { createPlace } from 'apis/place';

interface Props {
  addressInfo: KakaoAddress;
  keyword: string;
  onClose: () => void;
  onCreateComplete: () => void;
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
  const buttonStyle = useCallback((): React.CSSProperties => {
    return { width: '100%' };
  }, []);
  const handleSaveClick = async () => {
    setIsLoading(true);
    try {
      await createPlace({
        name: keyword,
        address: addressInfo.road_address_name,
        longitude: addressInfo.x.toString(),
        latitude: addressInfo.y.toString(),
      });
      onCreateComplete();
    } catch (e) {
      console.log(e);
    }
    setIsLoading(true);
  };

  return (
    <Modal onClose={onClose}>
      <CreatePostWrap>
        <CreatePostHeader>
          <div>나의 관심장소 추가하기</div>
          <CloseIcon width={32} height={32} onClick={onClose} fill="black" />
        </CreatePostHeader>
        <CreatePostBody>
          <CreatePostLabel>위치</CreatePostLabel>
          <AddressInputWrap>
            <Input disabled value={addressInfo.road_address_name} readOnly />
            <Input value={addressDetail} onChange={handleAddressDetailChange} />
          </AddressInputWrap>
          <AddImageWrap>
            <CreatePostLabel>사진 첨부</CreatePostLabel>
            <AddImage />
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
        </CreatePostBody>
        <CreatePostFooter>
          <Button
            buttonType="outline"
            style={buttonStyle()}
            onClick={onClose}
            buttonWidth="100%"
          >
            취소
          </Button>
          <Button
            style={buttonStyle()}
            onClick={handleSaveClick}
            buttonWidth="100%"
          >
            저장
          </Button>
        </CreatePostFooter>
      </CreatePostWrap>
    </Modal>
  );
};
export default CreatePost;

const CreatePostWrap = styled.div`
  width: 480px;
  padding: 24px;
  background-color: ${colors.WHITE};
  border-radius: 8px;
`;
const CreatePostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${fonts('title-md-bold')};
  color: ${colors.NEUTRAl_900};
`;
const CreatePostBody = styled.div`
  margin-top: 32px;
`;
const CreatePostLabel = styled.div`
  ${fonts('text-sm-bold')};
  color: ${colors.NEUTRAl_900};
  margin-bottom: 4px;
`;
const AddressInputWrap = styled.div`
  > * + * {
    margin-top: 4px;
  }
`;
const AddImageWrap = styled.div`
  margin-top: 28px;
`;
const AddImageTip = styled.div`
  margin-top: 2px;
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
`;
const TagWrap = styled.div`
  margin-top: 28px;
`;
const MemoWrap = styled.div`
  margin-top: 28px;
`;
const CreatePostFooter = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 8px;
`;
