// Entry Point

// import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import font
import './css/global.css';

// import component
import App from './App';

// html entry
const root = ReactDOM.createRoot(document.getElementById('root'));

// render app component in React Strict Mode within react-router-dom's browser router
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
