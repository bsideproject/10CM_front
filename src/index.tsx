import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/overlay.css';
import App from './App';
import './assets/fonts/font-face.css';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from 'store/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root')!);

export const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
