import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App.jsx';
import Result from './result.jsx';

function MainWrapper() {

  return (
    <div className="relative z-30 h-full flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default MainWrapper;
