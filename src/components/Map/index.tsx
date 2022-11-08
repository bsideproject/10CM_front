import React, { ReactNode, useRef, useState, useEffect } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import { Address } from 'types/dtos/address';
import MapConfig from 'services/map-config.js';

interface Props {
  mapRef: React.MutableRefObject<any>;
  setMapRef?: (map: any) => void;
}

const Map: React.FC<Props> = ({ mapRef, setMapRef = () => {} }) => {
  let manager: any;
  useEffect(() => {
    const { kakao } = window;
    const kakaoMap = document.getElementById('map');
    const options = MapConfig.initMapOption(kakao); // 좌표, 레벨 설정 필요
    const map = new kakao.maps.Map(kakaoMap, options);
    const managerOptions = MapConfig.managerOptions(kakao, map);
    manager = new kakao.maps.drawing.DrawingManager(managerOptions);
    MapConfig.confirmMapLog(kakao, map);
    setMapRef(map);
  }, []);
  // 지도 생성
  // 맵 이벤트 등록
  const createMarker = () => {
    // locationY, locationX 예시s
    MapConfig.createMarker(33.450258, 126.570513);
  };
  const createCluster = () => {
    const locations = {};
    const { kakao } = window;

    MapConfig.createCluster(kakao, mapRef.current, locations);
  };
  // 마커 생성 : MapConfig.createMarker(kakao, map, locationY, locationX);
  // 클러스터 생성 : MapConfig.createCluster(kakao, map, locations);
  const currentLocation = () => {
    const { kakao } = window;

    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도
      const locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
      const message = '<div>하이</div>'; // 인포윈도우에 표시될 내용입니다
      // 마커와 인포윈도우를 표시합니다
      MapConfig.displayMarker(kakao, mapRef.current, locPosition, message);
    });
  };
  // 내 위치에 마커 찍기
  const getMapLevel = () => {
    alert(mapRef.current.getLevel());
    console.log(mapRef.current);
  };
  const handleClickSearchAddress = () => {
    const { kakao } = window;

    const { daum } = window;
    new daum.Postcode({
      width: '500px',
      height: '500px',
      oncomplete: (data: Address) => {
        MapConfig.completedAddress(kakao, mapRef.current, data);
      },
    }).open();
  };
  const handleClear = () => {
    const { kakao } = window;

    const kakaoMap = document.getElementById('map');
    const options = {
      center: mapRef.current.getCenter(),
      level: mapRef.current.getLevel(),
    };
    setMapRef(new kakao.maps.Map(kakaoMap, options)); // 지도 생성 및 객체 리턴
  };
  const handleCreateCursorMarker = (type: string) => {
    const { kakao } = window;

    return () => {
      // 그리기 중이면 그리기를 취소합니다
      manager.cancel();
      // 클릭한 그리기 요소 타입을 선택합니다
      manager.select(kakao.maps.drawing.OverlayType[type]);
    };
  };
  const handleCreatePolyLine = () => {
    const { kakao } = window;

    MapConfig.drawPolyLine(kakao, mapRef.current);
  };
  const handleCreateRoadView = () => {
    const { kakao } = window;

    const roadviewContainer = document.querySelector('#roadview');
    const roadview = new kakao.maps.Roadview(roadviewContainer);
    MapConfig.createRoadview(kakao, roadview);
  };
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <Wrap
        id="map"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <div
        id="roadview"
        style={{ width: '100%', height: '100%', display: 'none' }}
        onClick={() => handleCreateRoadView()}
      />
      <div style={{ display: 'none' }}>
        <button onClick={createMarker}>마커생성</button>
        <button onClick={createCluster}>클러스터생성</button>
        <button onClick={currentLocation}>내 위치 찾기</button>
        {/* <button onClick={createOveray}>마커찍기</button> */}
        <button onClick={getMapLevel}>줌 레벨</button>
        <button onClick={handleClickSearchAddress}>주소검색</button>
        <button onClick={handleClear}>초기화</button>
        <button onClick={handleCreateCursorMarker('MARKER')}>
          따라다니는 마커
        </button>
        <button onClick={handleCreatePolyLine}>선 테스트</button>
        <button onClick={handleCreateRoadView}>로드뷰 생성</button>
      </div>
    </div>
  );
};
export default Map;
const Wrap = styled.div`
  .info-title {
    display: block;
    background: #50627f;
    color: #fff;
    text-align: center;
    width: 100px;
    height: 100px;
    line-height: 22px;
    border-radius: 4px;
    padding: 0px 10px;
  }
  .overlaybox {
    position: relative;
    width: 360px;
    height: 350px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/box_movie.png')
      no-repeat;
    padding: 15px 10px;
  }
  .overlaybox div,
  ul {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .overlaybox li {
    list-style: none;
  }
  .overlaybox .boxtitle {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png')
      no-repeat right 120px center;
    margin-bottom: 8px;
  }
  .overlaybox .first {
    position: relative;
    width: 247px;
    height: 136px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumb.png')
      no-repeat;
    margin-bottom: 8px;
  }
  .first .text {
    color: #fff;
    font-weight: bold;
  }
  .first .triangle {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 0;
    left: 0;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/triangle.png')
      no-repeat;
    padding: 6px;
    font-size: 18px;
  }
  .first .movietitle {
    position: absolute;
    width: 100%;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    padding: 7px 15px;
    font-size: 14px;
  }
  .overlaybox ul {
    width: 247px;
  }
  .overlaybox li {
    position: relative;
    margin-bottom: 2px;
    background: #2b2d36;
    padding: 5px 10px;
    color: #aaabaf;
    line-height: 1;
  }
  .overlaybox li span {
    display: inline-block;
  }
  .overlaybox li .number {
    font-size: 16px;
    font-weight: bold;
  }
  .overlaybox li .title {
    font-size: 13px;
  }
  .overlaybox ul .arrow {
    position: absolute;
    margin-top: 8px;
    right: 25px;
    width: 5px;
    height: 3px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/updown.png')
      no-repeat;
  }
  .overlaybox li .up {
    background-position: 0 -40px;
  }
  .overlaybox li .down {
    background-position: 0 -60px;
  }
  .overlaybox li .count {
    position: absolute;
    margin-top: 5px;
    right: 15px;
    font-size: 10px;
  }
  .overlaybox li:hover {
    color: #fff;
    background: #d24545;
  }
  .overlaybox li:hover .up {
    background-position: 0 0px;
  }
  .overlaybox li:hover .down {
    background-position: 0 -20px;
  }
`;
