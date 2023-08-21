import React from "react";
import styles from "./aboutStyles.js";

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us.</h1>
      <p style={styles.firstText}>
        Project GENERATE A KIND MESSAGE was developed by a group of people that
        believe in uplifting experiences for individuals seeking emotional
        support and encouragement.
      </p>
      <p style={styles.firstText}>
        Join us on our journey while we we aspire to create a world where
        technology becomes a source of empathy and comfort, nurturing emotional
        resilience and brightening lives one message at a time.
      </p>
      <p style={styles.text}>
        Made with joy by Shiina, Aditya, Hoang, & Hansen, from the University of
        Washington.
      </p>
    </div>
  );
}
