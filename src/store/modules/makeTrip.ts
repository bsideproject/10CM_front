/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KakaoAddress } from 'dtos/kakao';

const initialState: KakaoAddress = {
  address_name: '',
  category_group_code: '',
  category_group_name: '',
  category_name: '',
  distance: '',
  id: '',
  phone: '',
  place_name: '',
  place_url: '',
  road_address_name: '',
  x: '',
  y: '',
};

const MakeTripSlice = createSlice({
  name: 'newPlace',
  initialState,
  reducers: {
    setAddr: (state, action: PayloadAction<KakaoAddress>) => {
      state = action.payload;
    },
  },
});

export const { setAddr } = MakeTripSlice.actions;
export default MakeTripSlice.reducer;
