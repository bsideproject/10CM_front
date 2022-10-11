import React, { FC } from 'react';
import styled from 'styled-components';

const CustomOverlay: FC = () => {
  return (
    <Wrap className="overlay_info">
      <a
        href="https://place.map.kakao.com/17600274"
        target="_blank"
        rel="noreferrer"
      >
        <strong>월정리 해수욕장</strong>
      </a>
      <div>
        <img
          src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_thumb.png"
          alt=""
        />
        <span className="address">비사이드 10CM 프로젝트</span>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  .overlay_info {
    border-radius: 6px;
    margin-bottom: 12px;
    float: left;
    position: relative;
    border: 1px solid #ccc;
    border-bottom: 2px solid #ddd;
    background-color: #fff;
  }
  .overlay_info:nth-of-type(n) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }
  .overlay_info a {
    display: block;
    background: #d95050;
    background: #d95050
      url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png')
      no-repeat right 14px center;
    text-decoration: none;
    color: #fff;
    padding: 12px 36px 12px 14px;
    font-size: 14px;
    border-radius: 6px 6px 0 0;
  }
  .overlay_info a strong {
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_icon.png')
      no-repeat;
    padding-left: 27px;
  }
  .overlay_info .desc {
    padding: 14px;
    position: relative;
    min-width: 190px;
    height: 56px;
  }
  .overlay_info img {
    vertical-align: top;
  }
  .overlay_info .address {
    font-size: 12px;
    color: #333;
    position: absolute;
    left: 80px;
    right: 14px;
    top: 24px;
    white-space: normal;
  }
  .overlay_info:after {
    content: '';
    position: absolute;
    margin-left: -11px;
    left: 50%;
    bottom: -12px;
    width: 22px;
    height: 12px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')
      no-repeat 0 bottom;
  }
`;

export default CustomOverlay;
