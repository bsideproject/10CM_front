import { KakaoAddress } from 'dtos/kakao';
import { MyPlaceResponse } from 'dtos/place';
import React, { SetStateAction, useState } from 'react';
import MapConfig from 'services/map-config.js';
interface roadView {
  isRoadMap: boolean;
  setIsRoadMap: React.Dispatch<SetStateAction<boolean>>;
  handleCreateRoadView: (addressInfo: MyPlaceResponse | KakaoAddress) => void;
}

const useRoadView = (): roadView => {
  const [isRoadMap, setIsRoadMap] = useState<boolean>(false);

  const handleCreateRoadView = (
    addressInfo: MyPlaceResponse | KakaoAddress,
  ) => {
    const { kakao } = window;
    setIsRoadMap(true);
    const roadviewContainer = document.querySelector('#roadview');
    const roadview = new kakao.maps.Roadview(roadviewContainer);
    MapConfig.createRoadview(kakao, roadview, addressInfo);
  };

  return { isRoadMap, setIsRoadMap, handleCreateRoadView };
};

export default useRoadView;
