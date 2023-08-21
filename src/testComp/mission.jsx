import React from "react";
import styles from "./missionStyles";

export default function MissionPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Mission.</h1>
      <p style={styles.text}>
        In our complex modern society, we understand that emotions are a vital
        part of being human, and there's no such thing as a "wrong" emotion. We
        believe in embracing the full spectrum of feelings, from joy and
        excitement to fear and sadness.
      </p>
      <p style={styles.text}>
        Our platform recognizes that sometimes you might experience two
        conflicting emotions at once, leaving you unsure of how to cope. Instead
        of suppressing or ignoring these feelings, we celebrate their complexity
        and offer an uplifting solution.
      </p>
      <p style={styles.text}>
        Welcome to our Kind Message Generator, where you can receive
        heartwarming messages tailored to your unique mix of emotions, helping
        you find comfort and positivity no matter how you feel.
      </p>
    </div>
  );
}
