/* eslint-disable func-names */
/* eslint-disable consistent-return */
import closeButton from 'assets/img/closeButton.svg';
import emptyImg from 'assets/img/noImg.svg';

class MapConfig {
  static initMapOption(kakao) {
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.499779332771375, 127.027978289709), // 지도의 중심좌표.
      // center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };
    return options;
  }

  static confirmMapLog(kakao, map) {
    kakao.maps.event.addListener(map, 'zoom_changed', function () {
      // 지도의 현재 레벨을 얻어옵니다
      const level = map.getLevel();
      console.log('현재 지도 레벨은 ', level, ' 입니다');
    });
    kakao.maps.event.addListener(map, 'click', function event(mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      const latlng = mouseEvent.latLng;
      console.log('마커를 찍은 위치는? ', latlng);
    });
  }

  static managerOptions(kakao, map) {
    return {
      map, // Drawing Manager로 그리기 요소를 그릴 map 객체입니다
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

  static createMarker(kakao, locationY, locationX) {
    // 마커 생성

    const markerPosition = new kakao.maps.LatLng(locationY, locationX);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    // marker.setMap(map.current);
    return marker;
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

  static getPos(lat, long) {
    const { kakao } = window;
    const pos = new kakao.maps.LatLng(lat, long);

    return pos;
  }

  // 마커 지우기
  static removeMarker(map, marker) {
    console.log(marker);
  }

  // 마커 이동
  static moveMarker(marker, lat, long) {
    const pos = this.getPos(lat, long);
    marker.setPosition(pos);
  }

  // 오버레이 이동
  static moveOverlay(overlay, lat, long) {
    const pos = this.getPos(lat, long);
    overlay.setPosition(pos);
  }

  // 오버레이 제거
  static removeOverlay(overlay) {
    overlay.setMap(null);
  }

  // 마커 이벤트 제거
  static removeMarkerEvent = (marker, d) => {};

  static changeOverlayContent(overlay, content) {
    console.log(content);
    overlay.setContent(content);
  }

  // 지드 이동
  static moveMap(map, lat, long) {
    const pos = this.getPos(lat, long);
    map.current.panTo(pos);
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

  static drawPolyLine(kakao, map, lineData, reset) {
    const linePath = lineData.map(
      el => new kakao.maps.LatLng(Number(el.y), Number(el.x)),
    );
    const polyline = new kakao.maps.Polyline({
      path: linePath,
      strokeWeight: 9,
      strokeColor: '#33D5B6',
      strokeOpacity: 0.9,
      strokeStyle: 'dashed',
    });
    polyline.setMap(map);
  }

  static createRoadview(kakao, roadview, addressInfo) {
    const roadviewClient = new kakao.maps.RoadviewClient();
    const isKakaoInfo = Object.keys(addressInfo).includes('road_address_name');
    let roadInfo = {};
    if (isKakaoInfo) {
      roadInfo.name = addressInfo.place_name;
      roadInfo.address = addressInfo.road_address_name;
      roadInfo.longitude = addressInfo.x;
      roadInfo.latitude = addressInfo.y;
      roadInfo.image = addressInfo.image;
      roadInfo.description = addressInfo.description;
    } else {
      roadInfo = addressInfo;
    }
    const { longitude, latitude, name, address, description, image } = roadInfo;
    console.log(addressInfo, roadInfo);
    const position = new kakao.maps.LatLng(latitude, longitude);

    roadviewClient.getNearestPanoId(position, 50, function (panoId) {
      if (!panoId) return alert('로드뷰를 찾을 수 없습니다.');
      roadview.setPanoId(panoId, position);
    });

    const wrap = document.createElement('div');
    wrap.className = 'rv-custom';
    const header = document.createElement('div');
    header.className = 'rv-title';
    const placeName = document.createElement('span');
    placeName.textContent = name;
    const closeBtn = document.createElement('img');
    closeBtn.src = closeButton;
    closeBtn.alt = 'X';

    const descWrap = document.createElement('div');
    descWrap.className = 'rv-desc';
    const descTextWrap = document.createElement('div');
    descTextWrap.className = 'rv-desc-text';
    const descAddr = document.createElement('span');
    descAddr.className = 'rv-desc-addr';
    descAddr.textContent = address;
    const descMain = document.createElement('p');
    descMain.className = 'rv-desc-p';
    descMain.textContent = description || '';
    const thumbImg = document.createElement('img');
    thumbImg.src = image || emptyImg;
    thumbImg.alt = '';
    const actionWrap = document.createElement('div');
    actionWrap.className = 'rv-action';
    // const postUpdateBtn = document.createElement('button');
    // postUpdateBtn.textContent = '포스팅 수정';
    const triangle = document.createElement('div');
    triangle.className = 'rv-triangle';

    closeBtn.onclick = () => {
      rvCustomOverlay.setMap(null);
    };
    header.appendChild(placeName);
    header.appendChild(closeBtn);
    descTextWrap.appendChild(descAddr);
    descTextWrap.appendChild(descMain);
    descWrap.appendChild(descTextWrap);
    descWrap.appendChild(thumbImg);
    // actionWrap.appendChild(postUpdateBtn);
    wrap.appendChild(header);
    wrap.appendChild(descWrap);
    wrap.appendChild(actionWrap);
    wrap.appendChild(triangle);

    const rvCustomOverlay = new kakao.maps.CustomOverlay({
      position,
      content: wrap,
      xAnchor: 0.5,
      yAnchor: 1.38,
      // removable: true,
    });

    kakao.maps.event.addListener(roadview, 'init', function () {
      const rMarker = new kakao.maps.Marker({
        position,
        map: roadview,
      });

      rvCustomOverlay.setMap(roadview);
      // rvCustomOverlay.open(roadview, rMarker);

      const projection = roadview.getProjection();

      const viewpoint = projection.viewpointFromCoords(
        rvCustomOverlay.getPosition(),
        rvCustomOverlay.getAltitude(),
      );

      roadview.setViewpoint(viewpoint);
    });
  }
}
// js로 적용 후 ts로 변경
export default MapConfig;
