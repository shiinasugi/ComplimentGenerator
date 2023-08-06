import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../message_pairs.json";

// import './feelingsImages'

import "./ResultsPage.css";

const feelingsToImages = {
  anxious: "./feelingsImages/anxious.jpeg",
  confident: "./feelingsImages/confident.avif",
  depressed: "./feelingsImages/depressed.avif",
  disappointed: "./feelingsImages/disappointed.jpeg",
  excited: "src/Results-component/feelingsImages/excited.jpeg",
  insecure: "./feelingsImages/insecure.jpeg",
  joyful: "./feelingsImages/joyful.jpeg",
  surprised: "src/Results-component/feelingsImages/surprised.jpeg",
};

const ResultsPage = ({ selectedEmotions, setSelectedEmotions }) => {
  const [arg1, arg2] = [selectedEmotions[0], selectedEmotions[1]];
  const [randomString, setRandomString] = useState(null);

  useEffect(() => {
    const sortedArguments = [arg1, arg2].sort(); // Sort the arguments alphabetically
    const sortedKey1 = sortedArguments[0];
    const sortedKey2 = sortedArguments[1];

    if (!(sortedKey1 in jsonData) || !(sortedKey2 in jsonData[sortedKey1])) {
      setRandomString("Error: Select correctly");
    } else {
      const resultList = jsonData[sortedKey1][sortedKey2];

      if (resultList.length === 0) {
        setRandomString("Error: Incorrect selection");
      } else {
        const randomIndex = Math.floor(Math.random() * resultList.length);
        setRandomString(resultList[randomIndex]);
      }
    }
  }, [arg1, arg2]); // Use arg1 and arg2 as dependencies

  return (
    <div className="results-container">
      <div className="sorted-keys-container">
        <h2 className="sorted-keys">
          Looks like you are feeling <span className="arg1">{arg1}</span> and{" "}
          <span className="arg2">{arg2}</span>!
        </h2>

        {/* <div className="images">
          <img src='./feelingsImages/excited.jpg' alt={arg1} className="image" />
          <img src='./feelingsImages/excited.jpg' alt={arg2} className="image" />
        </div> */}
      </div>

      <div className="prompt-container">
        <div className="prompt2">
          {randomString !== null ? (
            <p className="random-string">{randomString}</p>
          ) : (
            <p className="loading">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
