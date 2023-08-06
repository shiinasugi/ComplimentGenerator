import styles from "./HomepageStyles.jsx";


function Homepage() {
  return (
    <>
      <div style={styles.homePage}>
        <div style={styles.container}>
          <div style={styles.subMainPhrase}> let's talk about your feelings</div>
          <div style={styles.mainPhrase}>How are you feeling today? </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
