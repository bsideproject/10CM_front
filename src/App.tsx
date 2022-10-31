import './App.css';
import MainPage from 'pages/MainPage';
import GlobalStyle from 'assets/globalcss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateTrip from 'pages/CreateTrip';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
