// Question.js
import React, { useState } from 'react';

const Question = ({ question, onAnswerChange }) => {
  const [answer, setAnswer] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setAnswer(inputValue);
    onAnswerChange(question.id, inputValue);
  };

  return (
    <div>
      <p>{question.text}</p>
      <input
        type="number"
        value={answer}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Question;
