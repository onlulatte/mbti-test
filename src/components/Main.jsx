import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();
  const handleQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="page-inner main">
      <div className="main-top"></div>
      <div className="container text-center">
        <h2 className="sub-title">나와 어울리는 놀이기구는?</h2>
        <h1 className="title mt-20">놀이기구 테스트</h1>
        <div className="btn-item mt-50">
          <button onClick={handleQuiz}>테스트하기</button>
        </div>
        <div className="btn-item mt-20">
          <button className="subpoint-button">공유하기</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
