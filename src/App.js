import React, { useState, useEffect } from 'react';
import './App.css';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

function App() {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    const checkSpelling = () => {
      const words = text.split(' ');
      for (const word of words) {
        const lowerCaseWord = word.toLowerCase();
        if (customDictionary[lowerCaseWord]) {
          setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
          return;
        }
      }
      setSuggestion('');
    };

    checkSpelling();
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        rows={5}
        cols={40}
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default App;
