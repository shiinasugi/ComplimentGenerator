import { useState } from "react";
import styles from "./HomepageStyles.jsx";
import FeelingCircle from "./GetFeelingCircle.jsx";

const Homepage = () => {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [renderResult, setRenderResult] = useState(false);
  const emotionsAreSelected = selectedEmotions.length === 2;

  const submitSelection = () => {
    setRenderResult(true);
  };

  return (
    <>
      <div style={styles.homePage}>
        <div style={styles.Content}>
          {!renderResult ? (
            <div style={styles.PhraseContainer}>
              {!emotionsAreSelected ? (
                <>
                  <div style={styles.subMainPhrase}>
                    Let's talk about your feelings.
                  </div>
                  <div style={styles.mainPhrase}>
                    How are you feeling today?
                  </div>
                </>
              ) : (
                <>
                  <div style={styles.subMainPhrase}>
                    It looks like you're feeling
                  </div>
                  <div style={styles.mainEmotionsPhrase}>
                    {selectedEmotions[0]} & {selectedEmotions[1]} today.
                  </div>
                  <button
                    type="button"
                    style={styles.Button}
                    class="btn"
                    onClick={submitSelection}
                  >
                    Generate a kind message for yourself.
                    <span
                      class="material-symbols-outlined"
                      style={styles.ArrowIcon}
                    >
                      arrow_circle_right
                    </span>
                  </button>
                </>
              )}
            </div>
          ) : (
            <></>
          )}

          <div style={styles.FeelingCircleContainer}>
            <FeelingCircle
              selectedEmotions={selectedEmotions}
              setSelectedEmotions={setSelectedEmotions}
              renderResult={renderResult}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
