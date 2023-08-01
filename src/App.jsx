import React, { useState } from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Main from './components/Main';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.scss';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
