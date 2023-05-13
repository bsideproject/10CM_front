import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import EmptyContent from 'components/common/EmptyContent/EmptyContent';
import CompletedTripCard from 'components/CompletedTripCard/CompletedTripCard';
import CompletedTripGroup from 'components/CompletedTripGroup/CompletedTripGroup';
import MakeNewPlace from 'components/common/ModalContents/MakeNewPlace';
import { useAppDispatch } from 'store/configureStore.hooks';
import { MyTripListResponse } from 'dtos/trip';
import { setUpdateData } from 'store/modules/placeInfo';
import { getTripList } from 'apis/tripApi';
import Pagination from 'components/common/Pagination/Pagination';
import Toast from 'components/common/Toast';
import TripBanner from './TripBanner';

const MyTripContent: React.FC = () => {
  const [onModal, setOnModal] = useState(false);
  const [tripData, setTripData] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [onToast, setOnToast] = useState(false);
  const isLogin = localStorage.getItem('accessToken');
  const dispatch = useAppDispatch();

  const handleControlModal = () => {
    if (isLogin) {
      dispatch(setUpdateData([]));
      setOnModal(!onModal);
      return;
    }
    setOnToast(true);
    setTimeout(() => {
      setOnToast(false);
    }, 1500);
  };

  useEffect(() => {
    getTripList(currentPage).then(res => setTripData(res));
  }, [currentPage]);

  const emptyData =
    Object.keys(tripData).length === 0 || tripData?.data.length === 0;

  const headerText = emptyData
    ? '나의 여행'
    : `나의 여행 (${tripData.data.length})`;

  return (
    <Wrap>
      <TripBanner />
      <TripWrap>
        <Header>
          <HeaderText>{headerText}</HeaderText>
          <Button
            buttonType="filled"
            buttonSize="medium"
            buttonWidth="160px"
            onClick={handleControlModal}
            disabled={false}
          >
            <ButtonText>새로운 여행 만들기</ButtonText>
          </Button>
        </Header>
        <MainWrap>
          {emptyData && <EmptyContent onClick={handleControlModal} />}
          {!emptyData && <CompletedTripGroup data={tripData.data} />}
          {!emptyData && (
            <Pagination
              curPage={currentPage}
              totalPage={tripData.total_pages}
              onChangePage={setCurrentPage}
            />
          )}
        </MainWrap>
        {onModal && <MakeNewPlace onClose={handleControlModal} />}
      </TripWrap>
      {onToast && <Toast toastText="로그인 후 이용이 가능합니다." />}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TripWrap = styled.div`
  flex: 1;
  padding-top: 45px;
  width: 100%;
  background-color: ${colors.WHITE};
  padding: 45px 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
`;

const HeaderText = styled.span`
  ${fonts('title-lg-bold')};
  color: #000000;
`;

const ButtonText = styled.span`
  ${fonts('text-sm-bold')};
  color: ${colors.WHITE};
  letter-spacing: 0.013em;
`;

const MainWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export default MyTripContent;
