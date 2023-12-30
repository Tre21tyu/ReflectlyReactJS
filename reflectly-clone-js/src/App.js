// App.js
import React, { useState } from 'react';
import QuestionPage from './QuestionPage';
import ExportButton from './ExportButton';

const App = () => {
  const [questions, setQuestions] = useState([
    { id: 1, text: 'Question 1', answer: null },
    { id: 2, text: 'Question 2', answer: null },
    // Add more questions as needed
  ]);

  const handleAnswerChange = (questionId, answer) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, answer } : q
      )
    );
  };

  return (
    <div>
      {questions.map((question, index) => (
        <QuestionPage
          key={question.id}
          question={question}
          onAnswerChange={handleAnswerChange}
          isLast={index === questions.length - 1}
        />
      ))}
      <ExportButton data={questions} />
    </div>
  );
};

export default App;
