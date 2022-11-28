// useInput
import { useState, useCallback, ChangeEvent } from 'react';

type ReturnTypes = [string, (e: ChangeEvent<HTMLInputElement>) => void];

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

  return [data, handler];
};

export default useEnteredInfo;
