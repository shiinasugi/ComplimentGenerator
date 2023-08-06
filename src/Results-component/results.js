import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import jsonData from '../message_pairs.json'

import './ResultsPage.css';

const argsMap = {
  "anxious" : -1,
  "confident" : 1,
  "depressed" : -1,
  "disappointed" : -1,
  "excited" : 1,
  "insecure" : -1,
  "joyful" : 1,
  "surprised" : 1
};

const ResultsPage = () => {
  const { arg1, arg2 } = useParams(); // Use useParams to get URL parameters

  const [randomString, setRandomString] = useState(null);

  useEffect(() => {
    const sortedArguments = [arg1, arg2].sort(); // Sort the arguments alphabetically
    const sortedKey1 = sortedArguments[0];
    const sortedKey2 = sortedArguments[1];

    if (!(sortedKey1 in jsonData) || !(sortedKey2 in jsonData[sortedKey1])) {
      setRandomString('Error: Select correctly');
    } else {
      const resultList = jsonData[sortedKey1][sortedKey2];

      if (resultList.length === 0) {
        setRandomString('Error: Incorrect selection');
      } else {
        const randomIndex = Math.floor(Math.random() * resultList.length);
        setRandomString(resultList[randomIndex]);
      }
    }

  }, [arg1, arg2]); // Use arg1 and arg2 as dependencies

  return (
    <div className="results-container">
      <h2 className="result-name">
        Results
      </h2>

      <div className="sorted-keys-container">
        <h2 className="sorted-keys">
          Looks like you are feeling{' '}
          <span className="arg1">{arg1}</span> and{' '}
          <span className="arg2">{arg2}</span>!
        </h2>
      </div>

      <div className="prompt">
        {randomString !== null ? 
        (<p className="random-string">{randomString}</p>) : 
        (<p className="loading">Loading...</p>)}
      </div>

    </div>
  );
}

export default ResultsPage;
