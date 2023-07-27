// Result.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import resultData from '../data/resultData.json';
import './Result.scss';

const Result = () => {
  const type = localStorage.getItem('score');
  const test = resultData.result.find(item => item.mbti === type);
  
  const navigate = useNavigate();
  const handleMain = () => {
    navigate("/");
  };

  return (
    <div className="page-inner result">
      <div className="result-top" style={{ backgroundImage: `url(/images/${test.src})` }}></div>
      <div className="container text-center">
        <h2 className="sub-title">나와 어울리는 놀이기구는?</h2>
        <h1 className="title mt-20">{test.name}</h1>
        <p className="description mt-20">{test.desc}</p>
        {/* <div className="btn-item mt-20">
          <button className="subpoint-button">공유하기</button>
        </div> */}
        <div className="btn-item mt-30">
          <button onClick={handleMain} className="point-button">메인으로</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
