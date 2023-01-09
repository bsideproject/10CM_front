import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import placeInfo from './modules/placeInfo';
import authInfo from './modules/authInfo';

const persistConfig = {
  key: 'menu',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authInfo);

const store: any = configureStore({
  reducer: {
    placeInfo,
    authInfo: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
// https://zaraza.tistory.com/113
// https://velog.io/@hoon_dev/%EB%A6%AC%EC%95%A1%ED%8A%B8-X-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Redux-toolkit%EC%9C%BC%EB%A1%9C-%EA%B0%84%EB%8B%A8%ED%95%9C-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EB%B0%8F-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
