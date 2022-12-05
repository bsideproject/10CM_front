/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  initFromDate,
  initToDate,
  addZero,
  updateAddrData,
} from 'services/misc';
import { MyTripDetail } from 'dtos/trip';
import { KakaoAddress } from 'dtos/kakao';

interface IState {
  title: string;
  fromDate: string;
  toDate: string;
  updateData: KakaoAddress[][];
  updateId: number;
  img: any;
}

const initialState: IState = {
  title: '',
  fromDate: addZero(initFromDate),
  toDate: addZero(initToDate),
  updateData: [],
  updateId: -1,
  img: {},
};

const placeInfoSlice = createSlice({
  name: 'newPlace',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setFromDate: (state, action: PayloadAction<string>) => {
      state.fromDate = addZero(action.payload);
    },
    setToDate: (state, action: PayloadAction<string>) => {
      state.toDate = addZero(action.payload);
    },
    setUpdateData: (state, action: PayloadAction<MyTripDetail[][]>) => {
      state.updateData = updateAddrData(action.payload);
    },
    setUpdateId: (state, action: PayloadAction<number>) => {
      state.updateId = action.payload;
    },
    setImg: (state, action: PayloadAction<any>) => {
      state.img = action.payload;
    },
  },
});

export const {
  setTitle,
  setFromDate,
  setToDate,
  setUpdateData,
  setUpdateId,
  setImg,
} = placeInfoSlice.actions;
export default placeInfoSlice.reducer;

// 여행제목, 날짜, 사진

// ref: https://velog.io/@ovogmap/React-Redux-Toolkit-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
