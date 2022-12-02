/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initFromDate, initToDate, addZero } from 'services/misc';
interface IState {
  title: string;
  fromDate: string;
  toDate: string;
  img: any;
}

const initialState: IState = {
  title: '',
  fromDate: addZero(initFromDate),
  toDate: addZero(initToDate),
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
    setImg: (state, action: PayloadAction<any>) => {
      state.img = action.payload;
    },
  },
});

export const { setTitle, setFromDate, setToDate, setImg } =
  placeInfoSlice.actions;
export default placeInfoSlice.reducer;

// 여행제목, 날짜, 사진

// ref: https://velog.io/@ovogmap/React-Redux-Toolkit-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
