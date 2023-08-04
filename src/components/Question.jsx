import React from "react";

const Question = ({ length, id, question, options, handleAnswer }) => {
  return (
    <>
      <div className="progress mb-50">
        <div className="progress-bar" style={{ width: (id - 1) / length * 100 + '%' }}></div>
      </div>
      <div className="container">
        <div className="counter mb-30">
          <span className="progress-color">{id}</span>
          <span className="end-color">/{length}</span>
        </div>
        <div className="question mb-30">
          <p>{question}</p>
        </div>
        {options.map((option, idx) => {
          return (
            <div key={option.type} className={`btn-item${idx == 1 ? ' mt-20' : ''}`}>
              <button onClick={() => handleAnswer(option.type)}>
                {option.answer}
              </button>
            </div>
          );
        })}
    </div>
    </>
  );
};

export default Question;
