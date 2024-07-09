import React from 'react';
import './Result.css';

const Result = ({ score, restartQuiz }) => {
  return (
    <div className="result-container">
      <h1 style={{ color: 'blue' }}>TEST NATIJASI</h1>
      <h2>To'gri javoblar soni: {score} / 10</h2>
      <p>
        {' '}
        {score >= 8
          ? 'Siz testdan muvaffaqiyatli o`tdingiz'
          : 'Siz testdan o`ta olmadingiz'}{' '}
      </p>
      <button onClick={restartQuiz} className="restart-button">
        Tizimga kirish
      </button>
    </div>
  );
};

export default Result;
