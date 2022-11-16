// useInput
import {
  useState,
  useCallback,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import { useAppDispatch, useAppSelect } from 'store/configureStore.hooks';
import { setFromDate, setToDate } from 'store/modules/placeInfo';
import { convertDate, initFromDate, initToDate } from 'services/misc';
type AllowType = 'start' | 'end';
type ReturnTypes = [string, (e: Date) => void, boolean, () => void];

const usePickerInfo = (type: AllowType): ReturnTypes => {
  const initDate = initFromDate;
  const plusDate = initToDate;
  const initValue = type === 'start' ? initDate : plusDate;

  const [data, setData] = useState<string>(initValue);
  const [clickedPicker, setClickedPicker] = useState(false);

  const dispatch = useAppDispatch();

  const handler = useCallback(
    (date: Date) => {
      const dashDate = convertDate(date, 'dash');
      setData(dashDate);
      if (type === 'start') {
        dispatch(setFromDate(dashDate));
      } else {
        dispatch(setToDate(dashDate));
      }
      setClickedPicker(false);
    },
    [data],
  );

  const handleChangeClicked = () => {
    setClickedPicker(!clickedPicker);
  };

  return [data, handler, clickedPicker, handleChangeClicked];
};

export default usePickerInfo;
