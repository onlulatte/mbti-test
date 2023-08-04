import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import quizData from "../data/quizData.json";
import Question from "./Question";
import "./Quiz.scss";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 });
  const [result, setResult] = useState('');

  const handleAnswer = (type) => {
    // 만약 , 가 있다면 , 를 기준으로 나눠서 배열을 만든다. (ex: "T, F" => ["T", "F"]")
    if (type.includes(',')) {
      const types = type.split(',').map((item) => item.trim());
      types.forEach((type) => {
        setScores((prevScores) => ({
          ...prevScores,
          [type]: prevScores[type] + 1
        }));
      });
    } else {
      setScores((prevScores) => ({
        ...prevScores,
        [type]: prevScores[type] + 1
      }));
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  useEffect(() => {
    // 퀴즈가 끝났을 때 실행
    if (currentQuestion === quizData.questions.length) {
      let type = '';

      // 'E' vs 'I'
      if (scores.E > scores.I) {
        type += 'E';
      } else {
        type += 'I';
      }

      // 'S' vs 'N'
      if (scores.S > scores.N) {
        type += 'S';
      } else {
        type += 'N';
      }

      // 'T' vs 'F'
      if (scores.T > scores.F) {
        type += 'T';
      } else {
        type += 'F';
      }

      // 'J' vs 'P'
      if (scores.J > scores.P) {
        type += 'J';
      } else {
        type += 'P';
      }

      setResult(type);
      localStorage.setItem('score', type);
    }
  }, [currentQuestion]);

  const navigate = useNavigate();
  
  if (currentQuestion >= quizData.questions.length) {
    navigate('/result');
  } else {
    return (
      <div className="page-inner quiz">
        <Question
          length={quizData.questions.length}
          id={quizData.questions[currentQuestion].id}
          question={quizData.questions[currentQuestion].question}
          options={quizData.questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      </div>
    )
  }
};

export default Quiz;
