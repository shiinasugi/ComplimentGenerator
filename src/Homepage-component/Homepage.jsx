import styles from "./HomepageStyles.jsx";
import FeelingCircle from "./GetFeelingCircle.jsx";

function Homepage() {
  return (
    <>
      <div style={styles.divStyleTest}>
        <span>Hello</span>
      </div>

      <div className="card p-2 m-5">
        <p>testing bootstrap</p>
      </div>

      <div>
        <h2>Feeling Circle Test</h2>
        {FeelingCircle()}
      </div>
    </>
  );
}

export default Homepage;
