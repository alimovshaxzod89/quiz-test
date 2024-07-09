import React, { useState, useEffect } from 'react';
import './Question.css';

const Question = ({ question, handleAnswer, timeLeft, currentQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleClick = (isCorrect, index) => {
    if (selectedOption === null) {
      // Disable further selection
      setSelectedOption(index);
      setIsCorrect(isCorrect);
      handleAnswer(isCorrect);
    }
  };

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, [question]);

  return (
    <div className="question-container">
      <div className="img_container">
        <img src={question.img} alt="question illustration" />
      </div>
      <div>
        {currentQuestion(question.question)}
        <div className="options-container">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleClick(option.isCorrect, index)}
              className={`option-button ${
                selectedOption === index
                  ? option.isCorrect
                    ? 'correct'
                    : 'incorrect'
                  : ''
              }`}
              disabled={selectedOption !== null}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
