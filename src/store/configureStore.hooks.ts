import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './configureStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
// selector에 별도 타입을 붙이지 않기 위함
