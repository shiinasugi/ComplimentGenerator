import styles from "./HomepageStyles.jsx";
import FeelingCircle from "./GetFeelingCircle.jsx";

function Homepage() {
  return (
    <>
      <div style={styles.homePage}>
        <div style={styles.Content}>
          <div style={styles.PhraseContainer}>
            <div style={styles.subMainPhrase}>
              Let's talk about your feelings.
            </div>
            <div style={styles.mainPhrase}>How are you feeling today? </div>
          </div>

          <div style={styles.FeelingCircleContainer}>
            <FeelingCircle />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
