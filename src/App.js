import React, { useState } from "react";
import './App.css'

const TextStatistics = () => {
  const [text, setText] = useState(""); // Stores the text entered by the user
  const [searchString, setSearchString] = useState(""); // Search string for replacement
  const [replaceString, setReplaceString] = useState(""); // Replace string for replacement

  // Function to handle text change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Function to count unique w  ords (case-insensitive)
  const getUniqueWordCount = () => {
    const words = text
      .toLowerCase()
      .match(/\b\w+\b/g); // Match words only (ignores punctuation)
    const uniqueWords = new Set(words); // Set for unique words
    return uniqueWords.size;
  };

  // Function to count characters excluding spaces and punctuation
  const getCharacterCount = () => {
    const characters = text.replace(/[\s\W_]+/g, ""); // Replace non-alphanumeric characters and spaces
    return characters.length;
  };

  // Function to replace all occurrences of the search string
  const handleReplaceAll = () => {
    const regex = new RegExp(searchString, "g"); // Global replacement (case-sensitive)
    const newText = text.replace(regex, replaceString);
    setText(newText);
  };

  return (
    <div className="container">
      <h2>Text Statistics</h2>

      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Type or paste your text here..."
      />

      
      <div className="replace-section">
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Search for..."
        />
        <input
          type="text"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
          placeholder="Replace with..."
        />
        <button onClick={handleReplaceAll}>Replace All</button>
      </div>
      <div className="stats">
        <p><strong>Unique Words:</strong> {getUniqueWordCount()}</p>
        <p><strong>Character Count (excluding spaces and punctuation):</strong> {getCharacterCount()}</p>
      </div>

    </div>
  );
};

export default TextStatistics;
