import React from "react";
import styles from "./missionStyles";

export default function MissionPage() {
  return(
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Mission.</h1>
      <div style={styles.missionList}>
        <p style={styles.text}>
          Empowerment: Our mission is to empower
          individuals by providing accessible tools that
          support their mental well-being journey.
        </p>  
        <p style={styles.text}>
          Accessibility for All: We're committed
          to making mental health resources inclusive
          and affordable, ensuring everyone has the opportunity 
          to improve their mental well-being.  
        </p> 
      </div>
    </div>
  )
}