import { FC, useState, Fragment, useRef } from 'react';
import RadioComponent from './RadioComponent';
const quizArray = [
  {
    id: 0,
    question: 'For which movie did Leonard DiCaprio win an Oscar?',
    correctAnswer: 'The Revenant',
    options: [
      { id: 0, value: 'The Revenant' },
      { id: 1, value: 'Shutter Island' },
      { id: 2, value: 'Inception' },
      { id: 3, value: 'Titanic' },
    ],
  },
  {
    id: 1,
    question: 'Who played the lead role in the movie "La La Land"?',
    correctAnswer: 'Ryan Gosling',
    options: [
      { id: 0, value: 'Emma Stone' },
      { id: 1, value: 'Ryan Gosling' },
      { id: 2, value: 'Brad Pitt' },
      { id: 3, value: 'Leonardo DiCaprio' },
    ],
  },
  {
    id: 2,
    question: 'Which film won the Academy Award for Best Picture in 2020?',
    correctAnswer: 'Parasite',
    options: [
      { id: 0, value: '1917' },
      { id: 1, value: 'Parasite' },
      { id: 2, value: 'Joker' },
      { id: 3, value: 'Once Upon a Time in Hollywood' },
    ],
  },
  {
    id: 3,
    question: 'Who directed the movie "The Dark Knight"?',
    correctAnswer: 'Christopher Nolan',
    options: [
      { id: 0, value: 'Steven Spielberg' },
      { id: 1, value: 'Christopher Nolan' },
      { id: 2, value: 'Martin Scorsese' },
      { id: 3, value: 'Quentin Tarantino' },
    ],
  },
  {
    id: 4,
    question: 'In which year was the first Academy Awards ceremony held?',
    correctAnswer: '1929',
    options: [
      { id: 0, value: '1932' },
      { id: 1, value: '1929' },
      { id: 2, value: '1945' },
      { id: 3, value: '1953' },
    ],
  },
  {
    id: 5,
    question:
      'Who won the Best Actor award for his role in the movie "The King\'s Speech"?',
    correctAnswer: 'Colin Firth',
    options: [
      { id: 0, value: 'Hugh Jackman' },
      { id: 1, value: 'Colin Firth' },
      { id: 2, value: 'George Clooney' },
      { id: 3, value: 'Johnny Depp' },
    ],
  },
  {
    id: 6,
    question: 'Which animated film features a character named Simba?',
    correctAnswer: 'The Lion King',
    options: [
      { id: 0, value: 'Finding Nemo' },
      { id: 1, value: 'Toy Story' },
      { id: 2, value: 'The Lion King' },
      { id: 3, value: 'Shrek' },
    ],
  },
  {
    id: 7,
    question:
      'Who won the Best Actress award for her role in the movie "Black Swan"?',
    correctAnswer: 'Natalie Portman',
    options: [
      { id: 0, value: 'Meryl Streep' },
      { id: 1, value: 'Cate Blanchett' },
      { id: 2, value: 'Natalie Portman' },
      { id: 3, value: 'Julia Roberts' },
    ],
  },
  {
    id: 8,
    question:
      'Which film is known for the quote, "Here\'s looking at you, kid"?',
    correctAnswer: 'Casablanca',
    options: [
      { id: 0, value: 'Gone with the Wind' },
      { id: 1, value: 'Casablanca' },
      { id: 2, value: 'Citizen Kane' },
      { id: 3, value: 'The Godfather' },
    ],
  },
  {
    id: 9,
    question: 'Who directed the science fiction film "Blade Runner"?',
    correctAnswer: 'Ridley Scott',
    options: [
      { id: 0, value: 'George Lucas' },
      { id: 1, value: 'James Cameron' },
      { id: 2, value: 'Steven Spielberg' },
      { id: 3, value: 'Ridley Scott' },
    ],
  },
  // Add 10 more questions here...
];

const Quiz = () => {
  const DivRef = useRef();
  const [isChecked, SetIsChecked] = useState(false);
  const [option, setOption] = useState('');
  const [result, setResult] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleQuizSubmit = () => {
    const correctAnswer = quizArray[currentIndex].correctAnswer;
    if (option !== '') {
      if (correctAnswer === option) {
        setResult('Congrats, your answer is correct 🎉');
        console.log(correctAnswer, option);
      }
      setResult('Your answer is wrong, next time');
    } else {
      alert('Fill in the fields please');
    }
  };

  const onOptionChange = (e) => {
    if (e.target.checked) {
      setOption(e.target.value);
    }
  };
  return (
    <div
      onSubmit={handleQuizSubmit}
      key={quizArray[currentIndex].id}
      className="quizPage"
    >
      <h1>{quizArray[currentIndex].question}</h1>
      {quizArray[0].options.map((option) => (
        <RadioComponent
          key={option.id}
          option={option}
          name="radio"
          style={
            {
              // border:
              //   result !== ''
              //     ? quizArray[currentIndex].correctAnswer === option.value
              //       ? '2px solid green'
              //       : '2px solid red'
              //     : null,
            }
          }
          onChange={onOptionChange}
          value={option.value}
        />
      ))}
      <button onClick={handleQuizSubmit}>Next</button>
      {result !== '' && <p>{result}</p>}
    </div>
  );
};

export default Quiz;
