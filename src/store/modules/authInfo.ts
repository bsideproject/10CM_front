import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { user } from 'dtos/userInfo';

const initialState: user = {
  user_id: -1,
  nickname: '',
  name: '',
  email: '',
  profile_image_url: '',
};

const AuthInfoSlice = createSlice({
  name: 'authInfo',
  initialState,
  reducers: {
    setAuthInfo: (state, action: PayloadAction<user>) => {
      state = action.payload;
    },
  },
});

export const { setAuthInfo } = AuthInfoSlice.actions;
export default AuthInfoSlice.reducer;
