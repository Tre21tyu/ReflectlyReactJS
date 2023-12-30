// ExportButton.js
import React from 'react';

const ExportButton = ({ data }) => {
  const handleExport = () => {
    const jsonData = data.reduce((acc, question) => {
      acc[question.text] = question.answer;
      return acc;
    }, {});

    console.log(JSON.stringify(jsonData));
    // You can do something with the JSON data, e.g., save it to a file or send it to a server.
  };

  return <button onClick={handleExport}>Export Data</button>;
};

export default ExportButton;
