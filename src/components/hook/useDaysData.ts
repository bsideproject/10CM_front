import { AddrT } from 'types/dtos/address';
import { useState, useCallback, ChangeEvent } from 'react';

const useDaysData = (endDay: number): any => {
  const initValue = [];
  for (let i = 0; i < endDay; i += 1) {
    initValue[i] = [];
  }
  const [mapData, setData] = useState<AddrT[][]>(initValue);

  const handleChangeData = (addr: AddrT, dayNum: number) => {
    mapData[dayNum - 1].push(addr);
    console.log(mapData);
    setData([...mapData]);
  };

  return [mapData, handleChangeData];
};

export default useDaysData;
