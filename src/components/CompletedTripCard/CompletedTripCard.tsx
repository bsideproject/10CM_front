import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors } from 'constants/colors';
import { fonts } from 'assets/fonts/fonts';
import Img from 'components/Img/Img';
import { convertTripDate } from 'services/misc';
import defaultTripImg from 'assets/img/defaultTripImg.svg';
import { MyTrip, MyTripRequest } from 'dtos/trip';
import shareIcon from 'assets/img/shareIcon.svg';
import dotIcon from 'assets/img/dotIcon.svg';
import { sizes } from 'constants/sizes';
import MyPlaceDetail from 'components/common/ModalContents/MyPlaceDetail';
import DeleteTrip from 'components/common/ModalContents/DeleteTrip';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'constants/route';
import { useAppDispatch } from 'store/configureStore.hooks';
import {
  setTitle,
  setFromDate,
  setToDate,
  setUpdateData,
  setImg,
  setUpdateId,
} from 'store/modules/placeInfo';
import { getDetailTrip } from 'apis/tripApi';
interface IProps {
  data: MyTrip;
}
const CompletedTripCard: React.FC<IProps> = ({ data }) => {
  const [clickedOption, setClickedOption] = useState(false);
  const [onDetailModal, setOnDetailModal] = useState(false);
  const [onDeleteModal, setOnDeleteModal] = useState(false);
  const clickedOptionRef = useRef<any>();
  const [tripData, setTripData] = useState<MyTripRequest>();

  useEffect(() => {
    getDetailTrip(data.trip_id).then(res => setTripData(res));
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  useEffect(() => {});
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickDot = () => {
    setClickedOption(!clickedOption);
  };

  const handleClickDetail = () => {
    setOnDetailModal(!onDetailModal);
  };

  const handleClickUpdate = () => {
    dispatch(setTitle(data.name));
    dispatch(setFromDate(data.start_date));
    dispatch(setToDate(data.end_date));
    dispatch(setUpdateData(tripData!.trip_details));
    dispatch(setUpdateId(data.trip_id));
    dispatch(
      setImg({
        url: data.trip_image_url || '',
        originalName: data.trip_image_name || '',
      }),
    );
    navigate(routePath.MAKE_MY_TRIP);
  };

  const handleClickDelete = () => {
    setOnDeleteModal(!onDeleteModal);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (clickedOption && !clickedOptionRef.current.contains(e.target)) {
      handleClickDot();
    }
  };

  const tripDate = convertTripDate(data.start_date, data.end_date);

  return (
    <Wrap>
      <HoverWrap>
        <Img
          src={data.trip_image_url || defaultTripImg}
          width="244px"
          height="137px"
        />
      </HoverWrap>
      <TripWrap>
        <TripTitle>{data.name}</TripTitle>
        <TripDate>{tripDate}</TripDate>
      </TripWrap>
      <TripParagraph>{data.description}</TripParagraph>
      <OptionWrap ref={clickedOptionRef}>
        <Img
          src={shareIcon}
          width={sizes.SHARE_ICON_SIZE}
          height={sizes.SHARE_ICON_SIZE}
          onClick={() => {}}
        />
        <Img
          src={dotIcon}
          width={sizes.DOT_ICON_SIZE}
          height={sizes.DOT_ICON_SIZE}
          onClick={handleClickDot}
        />
        {clickedOption && (
          <OptionList>
            <OptionItem onClick={handleClickDetail}>상세보기</OptionItem>
            <OptionItem onClick={handleClickUpdate}>수정하기</OptionItem>
            <OptionItem onClick={handleClickDelete}>삭제하기</OptionItem>
          </OptionList>
        )}
      </OptionWrap>
      {onDetailModal && (
        <MyPlaceDetail
          tripDate={tripDate}
          tripData={tripData!}
          onClose={handleClickDetail}
        />
      )}
      {onDeleteModal && (
        <DeleteTrip onClose={handleClickDelete} tripId={data.trip_id} />
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 284px;
  padding: 20px;
  gap: 12px;
  background-color: ${colors.WHITE};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
`;

const HoverWrap = styled.div`
  width: 244px;
  height: 137px;
`;

const TripWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TripTitle = styled.span`
  ${fonts('text-sm-bold')};
  color: ${colors.BLACK};
  letter-spacing: 0.013em;
  width: 100%;
`;

const TripDate = styled.span`
  ${fonts('caption')};
  color: ${colors.NEUTRAl_400};
  letter-spacing: 0.013em;
`;

const TripParagraph = styled.p`
  width: 100%;
  height: 52px;
  ${fonts('text-xs-regular')};
  color: ${colors.BLACK};
  letter-spacing: 0.013em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* word-break: break-all; */
`;

const OptionWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  right: 0;
  width: 120px;
  background-color: ${colors.WHITE};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 8px;
  gap: 8px;
`;

const OptionItem = styled.li`
  display: flex;
  flex-direction: column;
  ${fonts('text-xxs-regular')};
  color: #222222;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.NEUTRAl_50};
    border-radius: 8px;
  }
`;
export default CompletedTripCard;
