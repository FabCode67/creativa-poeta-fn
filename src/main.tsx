import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Confirm from './components/Confirm.tsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
