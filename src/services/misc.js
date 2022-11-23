// const createOverlay = () => {
//   const content = ReactDOMServer.renderToString(
//     <div
//       className="overlaybox"
//       onClick={() => {
//         console.log('good');
//       }}
//     >
//       <div className="boxtitle">금주 영화순위</div>
//       <div className="first">
//         <div className="triangle text">1</div>
//         <div className="movietitle text">드래곤 길들이기2</div>
//       </div>
//       <ul>
//         <li className="up">
//           <span className="number">2</span>
//           <span className="title">명량</span>
//           <span className="arrow up" />
//           <span className="count">2</span>
//         </li>
//         <li
//           onClick={() => {
//             setState(true);
//           }}
//         >
//           <span className="number">3</span>
//           <span className="title">해적(바다로 간 산적)</span>
//           <span className="arrow up" />
//           <span className="count">6</span>
//         </li>
//         <li>
//           <span className="number">4</span>
//           <span className="title">해무</span>
//           <span className="arrow up" />
//           <span className="count">3</span>
//         </li>
//         <li>
//           <span className="number">5</span>
//           <span className="title">안녕, 헤이즐</span>
//           <span className="arrow down" />
//           <span className="count">1</span>
//         </li>
//       </ul>
//     </div>,
//   );
//   const position = new kakao.maps.LatLng(37.49887, 127.026581);

//   // 커스텀 오버레이를 생성합니다
//   const customOverlay = new kakao.maps.CustomOverlay({
//     position,
//     content,
//     xAnchor: 0.3,
//     yAnchor: 0.91,
//     clickable: true,
//   });

//   // 커스텀 오버레이를 지도에 표시합니다
//   customOverlay.setMap(map.current);
// };
