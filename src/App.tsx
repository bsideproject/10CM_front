import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import Map from 'components/Map';

const App = () => {
  return (
    <div>
      <div>10 TEAM</div>
      <div>카카오 지도</div>
      <Map />
    </div>
  );
};

export default App;
