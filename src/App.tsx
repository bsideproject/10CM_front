import './App.css';
import GlobalStyle from 'components/GlobalCss/globalcss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPlace from 'pages/MyPlace';
import { routePath } from 'constants/route';
import MyTrip from 'pages/MyTrip';
import MakeMyTrip from 'pages/MakeMyTrip';
import UnzidoIntro from 'pages/UnzidoIntro';
import MyPage from 'pages/MyPage';
import CallbackAuth from 'pages/CallbackAuth';
import ShareTrip from 'pages/ShareTrip';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={routePath.INTRO} element={<UnzidoIntro />} />
          <Route path={routePath.MY_PLACE} element={<MyPlace />} />
          <Route path={routePath.MY_TRIP} element={<MyTrip />} />
          <Route path={routePath.MAKE_MY_TRIP} element={<MakeMyTrip />} />
          <Route path={routePath.MY_PAGE} element={<MyPage />} />
          <Route path={routePath.CALLBACK_KAKAO} element={<CallbackAuth />} />
          <Route path={routePath.SHARE} element={<ShareTrip />} />
          <Route path={routePath.LOGIN_ERROR} element={<UnzidoIntro />} />
          <Route path="*" element={<UnzidoIntro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
