import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'
import 'animate.css';
import './index.scss';
import App from './App';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
