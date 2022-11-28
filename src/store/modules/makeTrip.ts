/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddrT } from 'types/dtos/address';

const initialState: AddrT = {
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
    setAddr: (state, action: PayloadAction<AddrT>) => {
      state = action.payload;
    },
  },
});

export const { setAddr } = MakeTripSlice.actions;
export default MakeTripSlice.reducer;
