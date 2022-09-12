import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'
import 'aos/dist/aos.css';
import 'animate.css';
import './index.scss';

// redux-persist
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
