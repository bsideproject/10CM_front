import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import Map from 'components/Map';
import GlobalStyle from 'assets/globalcss';

const App = () => {
  return (
    <div>
      <div>10 TEAM</div>
      <div>카카오 지도</div>
      <GlobalStyle />
      <Map />
    </div>
  );
};

export default App;
