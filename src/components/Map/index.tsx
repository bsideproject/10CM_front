import React, { ReactNode, useRef, useState, useEffect } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';
import { Address, LatLng } from 'types/dtos/address';
interface Props {}

const Map: React.FC<Props> = () => {
  const map = useRef<any>(null);
  const { kakao } = window;

  const [test, setState] = useState<boolean>(false);
  useEffect(() => {
    const testMap = document.getElementById('map');
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };
    map.current = new kakao.maps.Map(testMap, options); // 지도 생성 및 객체 리턴
  }, []);
  // 지도 생성

  const createMarker = () => {
    const markerPosition = new kakao.maps.LatLng(33.450711, 126.570611);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map.current);
  };

  // 마커 생성
  const createCluster = () => {
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map.current, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 3, // 클러스터 할 최소 지도 레벨
    });
    const markers = [
      new kakao.maps.Marker({
        position: new kakao.maps.LatLng(33.450711, 126.570611),
      }),
      new kakao.maps.Marker({
        position: new kakao.maps.LatLng(33.451021, 126.574833),
      }),
      new kakao.maps.Marker({
        position: new kakao.maps.LatLng(33.450231, 126.5739444),
      }),
      new kakao.maps.Marker({
        position: new kakao.maps.LatLng(33.451141, 126.575332),
      }),
    ];
    clusterer.addMarkers(markers);
  };
  // 클러스터 생성
  const displayMarker = (locPosition: any, message: string) => {
    const marker = new kakao.maps.Marker({
      map: map.current,
      position: locPosition,
    });
    const infowindow = new kakao.maps.InfoWindow({
      position: locPosition,
      removable: true,
      content: '<span class="info-title">말풍선타이틀</span>', // 인포윈도우 내부에 들어갈 컨텐츠 입니다.
    });

    infowindow.open(map.current, marker);
    const infoTitle = document.querySelectorAll('.info-title');
    infoTitle.forEach(el => {
      const element = el;
      if (element.parentElement?.parentElement) {
        element.parentElement.parentElement.style.border = '0';
        element.parentElement.parentElement.style.backgroundColor =
          'transparent';
      }
    });
    // 지도 중심좌표를 접속위치로 변경합니다
    map.current.setCenter(locPosition);
  };

  const searchHome = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도

      const locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
      const message = '<div>하이</div>'; // 인포윈도우에 표시될 내용입니다
      // 마커와 인포윈도우를 표시합니다
      displayMarker(locPosition, message);
    });
  };
  // 내 위치에 마커 찍기

  const createOveray = () => {
    const content = ReactDOMServer.renderToString(
      <div
        className="overlaybox"
        onClick={() => {
          console.log('good');
        }}
      >
        <div className="boxtitle">금주 영화순위</div>
        <div className="first">
          <div className="triangle text">1</div>
          <div className="movietitle text">드래곤 길들이기2</div>
        </div>
        <ul>
          <li className="up">
            <span className="number">2</span>
            <span className="title">명량</span>
            <span className="arrow up" />
            <span className="count">2</span>
          </li>
          <li
            onClick={() => {
              setState(true);
            }}
          >
            <span className="number">3</span>
            <span className="title">해적(바다로 간 산적)</span>
            <span className="arrow up" />
            <span className="count">6</span>
          </li>
          <li>
            <span className="number">4</span>
            <span className="title">해무</span>
            <span className="arrow up" />
            <span className="count">3</span>
          </li>
          <li>
            <span className="number">5</span>
            <span className="title">안녕, 헤이즐</span>
            <span className="arrow down" />
            <span className="count">1</span>
          </li>
        </ul>
      </div>,
    );
    const position = new kakao.maps.LatLng(37.49887, 127.026581);

    // 커스텀 오버레이를 생성합니다
    const customOverlay = new kakao.maps.CustomOverlay({
      position,
      content,
      xAnchor: 0.3,
      yAnchor: 0.91,
      clickable: true,
    });

    // 커스텀 오버레이를 지도에 표시합니다
    customOverlay.setMap(map.current);
  };

  useEffect(() => {
    if (map.current) {
      kakao.maps.event.addListener(map.current, 'zoom_changed', function () {
        // 지도의 현재 레벨을 얻어옵니다
        const level = map.current.getLevel();

        console.log('현재 지도 레벨은 ', level, ' 입니다');
      });
    }
  }, [map]);

  const getMapLevel = () => {
    alert(map.current.getLevel());
  };

  const handleClickSearchAddress = () => {
    const { daum } = window;
    new daum.Postcode({
      width: '500px',
      height: '500px',
      oncomplete: (data: Address) => {
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          data.address,
          function (result: LatLng[], status: any) {
            console.log('result', result, 'STATUS', status);

            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
              // console.log(coords);
              // 가져온 x, y 좌표
              const marker = new kakao.maps.Marker({
                map: map.current,
                position: coords,
              });
              const infowindow = new kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">결과좌표</div>',
              });
              infowindow.open(map.current, marker);

              map.current.setCenter(coords);
            }
          },
        );
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
      },
    }).open();
  };
  return (
    <div>
      <Wrap
        id="map"
        style={{ width: '2000px', height: '700px', backgroundColor: 'red' }}
      />
      <div id="maplevel" />
      <button onClick={createMarker}>마커생성</button>
      <button onClick={createCluster}>클러스터생성</button>
      <button onClick={searchHome}>내 위치 찾기</button>
      <button onClick={createOveray}>마커찍기</button>
      <button onClick={getMapLevel}>줌 레벨</button>
      <button onClick={handleClickSearchAddress}>주소검색</button>
      <button
        onClick={() => {
          console.log('dfawe');
        }}
      >
        테스트
      </button>
      <div>지도</div>
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
