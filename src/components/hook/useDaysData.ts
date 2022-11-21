import { AddrT } from 'types/dtos/address';
import { useState, useCallback, ChangeEvent } from 'react';

const useDaysData = (endDay: number): any => {
  const initValue = [];
  for (let i = 0; i < endDay; i += 1) {
    initValue[i] = [];
  }
  const [mapData, setData] = useState<AddrT[][]>(initValue);

  const handleChangeData = (addr: AddrT, dayNum: number) => {
    const filteredData = mapData[dayNum - 1].filter(el => el.id === addr.id);
    if (filteredData.length > 0) {
      return;
    }

    mapData[dayNum - 1].push(addr);
    console.log(mapData);
    setData([...mapData]);
  };

  const handleRemoveData = (addr: AddrT, dayNum: number) => {
    const filteredData = mapData[dayNum - 1].filter(el => el.id !== addr.id);
    mapData[dayNum - 1] = filteredData;
    setData([...mapData]);
  };
  return [mapData, handleChangeData, handleRemoveData];
};

export default useDaysData;
