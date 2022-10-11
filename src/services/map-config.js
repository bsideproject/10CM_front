class MapConfig {
  static managerOptions(kakao, map) {
    return {
      map: map.current, // Drawing Manager로 그리기 요소를 그릴 map 객체입니다
      drawingMode: [
        // drawing manager로 제공할 그리기 요소 모드입니다
        kakao.maps.drawing.OverlayType.MARKER,
        kakao.maps.drawing.OverlayType.POLYLINE,
        kakao.maps.drawing.OverlayType.RECTANGLE,
        kakao.maps.drawing.OverlayType.CIRCLE,
        kakao.maps.drawing.OverlayType.POLYGON,
      ],
      // 사용자에게 제공할 그리기 가이드 툴팁입니다
      // 사용자에게 도형을 그릴때, 드래그할때, 수정할때 가이드 툴팁을 표시하도록 설정합니다
      guideTooltip: ['draw', 'drag', 'edit'],
      markerOptions: {
        // 마커 옵션입니다
        draggable: true, // 마커를 그리고 나서 드래그 가능하게 합니다
        removable: true, // 마커를 삭제 할 수 있도록 x 버튼이 표시됩니다
      },
      polylineOptions: {
        // 선 옵션입니다
        draggable: true, // 그린 후 드래그가 가능하도록 설정합니다
        removable: true, // 그린 후 삭제 할 수 있도록 x 버튼이 표시됩니다
        editable: true, // 그린 후 수정할 수 있도록 설정합니다
        strokeColor: '#39f', // 선 색
        hintStrokeStyle: 'dash', // 그리중 마우스를 따라다니는 보조선의 선 스타일
        hintStrokeOpacity: 0.5, // 그리중 마우스를 따라다니는 보조선의 투명도
      },
      rectangleOptions: {
        draggable: true,
        removable: true,
        editable: true,
        strokeColor: '#39f', // 외곽선 색
        fillColor: '#39f', // 채우기 색
        fillOpacity: 0.5, // 채우기색 투명도
      },
      circleOptions: {
        draggable: true,
        removable: true,
        editable: true,
        strokeColor: '#39f',
        fillColor: '#39f',
        fillOpacity: 0.5,
      },
      polygonOptions: {
        draggable: true,
        removable: true,
        editable: true,
        strokeColor: '#39f',
        fillColor: '#39f',
        fillOpacity: 0.5,
        hintStrokeStyle: 'dash',
        hintStrokeOpacity: 0.5,
      },
    };
  }

  static createMarker(kakao, map, locationY, locationX) {
    // 마커 생성 type number

    const markerPosition = new kakao.maps.LatLng(locationY, locationX);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map.current);
  }

  static createCluster(kakao, map, locations) {
    // locations는 latlng 을 위함.
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
  }

  static displayMarker(kakao, map, locPosition, msg) {
    const marker = new kakao.maps.Marker({
      map: map.current,
      position: locPosition,
    });
    const infowindow = new kakao.maps.InfoWindow({
      position: locPosition,
      removable: true,
      content: '<span class="info-title">말풍선타이틀</span>', // 인포윈도우 내부에 들어갈 컨텐츠 입니다.
    });
    // content는 prop으로 받아오는 것이 좋을 것 같음.
    // content: msg
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
  }

  static completedAddress(kakao, map, data) {
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.address, function (result, status) {
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
        // content는 prop으로 받아오는 것이 좋을 것 같음.
        map.current.setCenter(coords);
      }
    });
  }

  static drawPolyLine(kakao, map) {
    const linePath = [
      new kakao.maps.LatLng(33.44861872974139, 126.57085430868555),
      new kakao.maps.LatLng(33.44829225907745, 126.57030740427622),
      new kakao.maps.LatLng(33.44820519052851, 126.57120050948008),
    ];

    const polyline = new kakao.maps.Polyline({
      path: linePath,
      strokeWeight: 4,
      strokeColor: '#FFAE00',
      strokeOpacity: 0.7,
      strokeStyle: 'solid',
    });

    polyline.setMap(map.current);
  }
}
// js로 적용 후 ts로 변경
export default MapConfig;
