import './App.css';
import MainPage from 'pages/MainPage';
import GlobalStyle from 'assets/globalcss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPlace from 'pages/MyPlace';
import { routePath } from 'constants/route';
import CreateTrip from 'pages/CreateTrip';
import MyTrip from 'pages/MyTrip';
import MakeMyTrip from 'pages/MakeMyTrip';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={routePath.MY_PLACE} element={<MyPlace />} />
          <Route path={routePath.CREATE_TRIP} element={<CreateTrip />} />
          <Route path={routePath.MY_TRIP} element={<MyTrip />} />
          <Route path={routePath.MAKE_MY_TRIP} element={<MakeMyTrip />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
