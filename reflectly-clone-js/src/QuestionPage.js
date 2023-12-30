// QuestionPage.js
import React, { useState } from 'react';
import Question from './Question';

const QuestionPage = ({ question, onAnswerChange, isLast }) => {
  const [answer, setAnswer] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setAnswer(inputValue);
    onAnswerChange(question.id, inputValue);
  };

  const handleNext = () => {
    // You can add any additional logic here before moving to the next question
    // For example, validation checks
    console.log(`Moving to the next question: ${question.id + 1}`);
  };

  const handleBack = () => {
    // You can add any additional logic here before moving back
    // For example, saving the current state
    console.log(`Moving back to the previous question: ${question.id - 1}`);
  };

  return (
    <div>
      <Question
        question={question}
        answer={answer}
        onAnswerChange={handleInputChange}
      />
      <div>
        {!isLast && <button onClick={handleNext}>Next</button>}
        {!isLast && <button onClick={handleBack}>Back</button>}
      </div>
    </div>
  );
};

export default QuestionPage;
