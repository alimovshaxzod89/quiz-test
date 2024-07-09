import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './components/Question';
import Result from './components/Result';
import './App.css';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [processedQuestions, setProcessedQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/questions');
        const fetchedQuestions = response.data;
        setQuestions(fetchedQuestions);
        setShuffledQuestions(shuffleArray(fetchedQuestions));
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setShowResult(true);
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setProcessedQuestions((prev) => [...prev, currentQuestionIndex]);
    if (currentQuestionIndex === shuffledQuestions.length - 1) {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setTimeLeft(1500);
    setShuffledQuestions(shuffleArray(questions));
    setProcessedQuestions([]);
  };

  const navigateToQuestion = (index) => {
    if (!processedQuestions.includes(index)) {
      setCurrentQuestionIndex(index);
    }
  };

  return (
    <div className="App">
      {!showResult && (
        <div className="navigator">
          <div className="navigation-buttons">
            {shuffledQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => navigateToQuestion(index)}
                className={`nav-button ${
                  currentQuestionIndex === index ? 'active' : ''
                }`}
                disabled={processedQuestions.includes(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="timer">
            {Math.floor(timeLeft / 60)}:{timeLeft % 60}
          </div>
        </div>
      )}

      {!showResult ? currentQuestion : null}
      <div>
        {showResult ? (
          <Result score={score} restartQuiz={restartQuiz} />
        ) : (
          shuffledQuestions.length > 0 && (
            <Question
              question={shuffledQuestions[currentQuestionIndex]}
              handleAnswer={handleAnswer}
              timeLeft={timeLeft}
              currentQuestion={setCurrentQuestion}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
