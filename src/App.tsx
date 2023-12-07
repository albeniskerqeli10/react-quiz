import { FC, useState, useRef, useEffect } from 'react';
import Home from './Home';
import RadioComponent from './RadioComponent';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import Quiz from './Quiz';

const quizArray = [
  {
    id: 0,
    question: 'For which movie did Leonard DiCaprio win an oscar',
    correctAnswer: 'The Revenant',
    options: [
      {
        id: 0,
        value: 'The Revenant',
      },
      {
        id: 1,
        value: 'Shutter Island',
      },
      {
        id: 2,
        value: 'Inception',
      },
      {
        id: 3,
        value: 'Titanic',
      },
    ],
  },
];
// For which movie did Leonard Dicaprio win an oscar
// The Revenant
export const App = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(divRef.current && divRef.current.scrollHeight);
  }, []);
  return (
    <div className="quizWrapper">
      <div ref={divRef} className="quizBox">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </div>
  );
};
