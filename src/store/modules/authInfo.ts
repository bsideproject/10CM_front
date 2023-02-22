import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserInfo } from 'apis/userInfo';
import { user } from 'dtos/userInfo';
import { PURGE } from 'redux-persist';

export const asyncUserFetch = createAsyncThunk(
  'authInfoSlice/asyncUserFetch',
  async (accToken: string) => {
    const data = await getUserInfo(accToken);
    return data;
  },
);

const initialState = {
  info: {
    user_id: -1,
    nickname: '',
    name: '',
    email: '',
    profile_image_url: '',
  },
  isLoggedIn: false,
};

const authInfoSlice = createSlice({
  name: 'authInfo',
  initialState,
  reducers: {
    setAuthInfo: (state, action: PayloadAction<user>) => {
      state.info = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(asyncUserFetch.pending, state => {
      state.isLoggedIn = false;
    });

    builder.addCase(
      asyncUserFetch.fulfilled,
      (state, action: PayloadAction<user>) => {
        state.info = action.payload;
        state.isLoggedIn = true;
      },
    );

    builder.addCase(asyncUserFetch.rejected, state => {
      state.isLoggedIn = false;
      state.info = initialState.info;
    });

    builder.addCase(PURGE, () => initialState);
  },
});

export const { setAuthInfo, setIsLoggedIn } = authInfoSlice.actions;
export const { info } = initialState;
export default authInfoSlice.reducer;
