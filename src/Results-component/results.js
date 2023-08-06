import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import jsonData from '../message_pairs.json'

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
    <div>
      <h2>Results</h2>
        {randomString !== null ? 
          (<p>Your prompt: {randomString}</p>) :
          (<p>Loading...</p>)
        }
    </div>
  );
}

export default ResultsPage;
