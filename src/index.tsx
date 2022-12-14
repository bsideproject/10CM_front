import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/overlay.css';
import './assets/fonts/font-face.css';

import { Provider } from 'react-redux';
import store from 'store/configureStore';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
