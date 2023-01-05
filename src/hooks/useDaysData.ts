import { KakaoAddress } from 'dtos/kakao';
import { useState, useCallback, ChangeEvent } from 'react';

const useDaysData = (endDay: number): any => {
  const initValue = [];
  for (let i = 0; i < endDay; i += 1) {
    initValue[i] = [];
  }
  const [mapData, setData] = useState<KakaoAddress[][]>(initValue);

  const handleChangeData = (addr: KakaoAddress, dayNum: number) => {
    const filteredData = mapData[dayNum - 1].filter(el => el.id === addr.id);
    if (filteredData.length > 0) {
      return;
    }
    
    mapData[dayNum - 1] = [...mapData[dayNum - 1], addr];
    setData([...mapData]);
  };

  const handleRemoveData = (addr: KakaoAddress, dayNum: number) => {
    const filteredData = mapData[dayNum - 1].filter(el => el.id !== addr.id);
    mapData[dayNum - 1] = filteredData;
    setData([...mapData]);
  };
  return [mapData, handleChangeData, handleRemoveData, setData];
};

export default useDaysData;
