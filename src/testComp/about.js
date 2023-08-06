import React from "react";
import styles from "./aboutStyles.js";

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us.</h1>
      <p style={styles.text}>
        PROJECT GENERATE A KIND MESSAGE was developed by a group of people that
        believe in uplifting experiences for individuals seeking emotional
        support and encouragement.
      </p>
      <p style={styles.text}>
        Through our innovative feeling circle interface, we aim to empower users
        to explore their emotions and select the feelings that resonate with
        them the most.
      </p>
      <p style={styles.text}>
        We use the intricacies of human emotions to provide tailored messages
        that offer solace and companionship during challenging times &
        heartfelt, joyous compliments and messages during moments of positivity.
      </p>
      <p style={styles.text}>
        Join us on our journey while we we aspire to create a world where
        technology becomes a source of empathy and comfort, nurturing emotional
        resilience and brightening lives one message at a time.
      </p>
    </div>
  );
}
