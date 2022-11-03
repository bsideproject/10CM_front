import './App.css';
import MainPage from 'pages/MainPage';
import GlobalStyle from 'components/GlobalCss/globalcss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPlace from 'pages/MyPlace';
import { routePath } from 'constants/route';
import CreateTrip from 'pages/CreateTrip';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={routePath.MY_PLACE} element={<MyPlace />} />
          <Route path={routePath.CREATE_TRIP} element={<CreateTrip />} />
          <Route path="*" element={<div>없는 페이지임 ㅋㅋ</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
