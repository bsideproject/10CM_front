import AddImgBtn from 'components/ModalContents/AddImgBtn';
import AddInput from 'components/ModalContents/AddInput';
import AddSchedule from 'components/ModalContents/AddSchedule';
import AddTextArea from 'components/ModalContents/AddTextArea';
import ModalButton from 'components/ModalContents/ModalButton';
import ModalTitle from 'components/ModalContents/ModalTitle';
import Modal from 'components/UI/Modal';
import React, { ChangeEvent, useState } from 'react';
import * as CFG from 'services/config.js';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import * as Misc from 'services/misc';
import { KakaoAddress } from 'dtos/kakao';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import { createTrip, updateTrip } from 'apis/tripApi';
import { useNavigate } from 'react-router-dom';
import { setUpdateData, setUpdateId, setImg } from 'store/modules/placeInfo';
interface IProps {
  daysData: KakaoAddress[][];
  onClose: () => void;
}
const MyTripPlace: React.FC<IProps> = ({ daysData, onClose }) => {
  const { TRIP } = CFG.MODAL_MYPLACE;

  const [detailDesc, setDetailDesc] = useState('');
  const { title, fromDate, toDate, img, updateData, updateId } = useAppSelect(
    state => state.placeInfo,
  );
  const [imgUrl, setImgUrl] = useState(img);
  const [titleValue, setTitleValue] = useState(title);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleClickSave = async () => {
    const prms = {
      description: detailDesc,
      end_date: toDate,
      name: titleValue,
      share_yn: 'N',
      start_date: fromDate,
      trip_image_url: imgUrl.url || '',
      trip_image_name: imgUrl.originalName || '',
      trip_details: Misc.convertTripDetails(daysData),
    };
    console.log(prms);
    if (updateData.length > 0) {
      await updateTrip(updateId, prms).then(() => {
        dispatch(setUpdateData([]));
        dispatch(setUpdateId(-1));
        dispatch(setImg({ originalName: '', url: '' }));
      });
    } else {
      await createTrip(prms);
    }
    onClose();
    navigate('/my-trip');
    // window.location.reload();
    // 모달 종료
    // 페이지 이동
  };

  const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDetailDesc(e.target.value);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  return (
    <Modal onClose={onClose}>
      <Wrap>
        <ModalTitle headerText={TRIP.headerText} onClose={onClose} />
        <AddInput
          purpose="TRIP"
          title={titleValue}
          onChangeTitle={handleChangeInput}
        />
        <AddSchedule isMake={false} />
        <AddImgBtn setUrl={setImgUrl} />
        <AddTextArea
          purpose="TRIP"
          value={detailDesc}
          onChange={handleChangeValue}
        />
        <ModalButton
          onClick={handleClickSave}
          btnText={updateData.length > 0 ? '수정하기' : '저장하기'}
          btnSize="large"
          btnWidth="100%"
          isOne
        />
      </Wrap>
    </Modal>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  border-radius: 8px;
  padding: 32px 24px;
  gap: 20px;
  background-color: ${colors.WHITE};
`;

export default MyTripPlace;
