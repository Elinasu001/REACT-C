import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// CSS 파일 한 번만 불러오기
import './styles/scss/common.scss';
import './styles/scss/default.scss';
import './styles/scss/layout.scss';
import './styles/scss/style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
