// useInput
import { useState, useCallback, ChangeEvent } from 'react';

type ReturnTypes = [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => void,
];

const useEnteredInfo = (initalValue: string): ReturnTypes => {
  // state 정의
  const [data, setData] = useState(initalValue);

  // 함수 정의
  const handler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setData(e.target.value);
    },
    [data],
  );

  const resetHandler = useCallback(() => {
    setData('');
  }, [data]);

  return [data, handler, resetHandler];
};

export default useEnteredInfo;
