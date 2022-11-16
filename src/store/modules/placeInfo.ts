import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  title: string;
  date: string;
  duration: number;
  img: string;
}
const initialState: IState = {
  title: '',
  date: '',
  duration: 0,
  img: '',
};

const placeInfoSlice = createSlice({
  name: 'newPlace',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      // state.info = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      // state.info = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      // state.info = action.payload;
    },
    setImg: (state, action: PayloadAction<string>) => {
      // state.info = action.payload;
    },
  },
});

export const { setTitle, setDate, setDuration, setImg } =
  placeInfoSlice.actions;
export default placeInfoSlice.reducer;

// 여행제목, 날짜, 사진

// ref: https://velog.io/@ovogmap/React-Redux-Toolkit-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
