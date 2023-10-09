import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import SingleServicePage from './components/SingleServicePage.tsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/services/:id" element={<SingleServicePage />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
