import { useRef, useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, getElementsAtEvent } from "react-chartjs-2";
import styles from "./FeelingCircleStyles.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

function FeelingCircle() {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [isTwoSelected, setIsTwoSelected] = useState(false); // use in Homepage component

  useEffect(() => {
    if (selectedEmotions.length === 2) {
      setIsTwoSelected(true);
    }
    console.log("capacity reached");
  }, [selectedEmotions]);

  const data = {
    labels: [],
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1],
        borderColor: "white",
        backgroundColor: ["#E27D5F", "#85CDCA", "#C38D9D", "#40B3A2"],
        // link: ["link1", "link2", "link3", "link4", ""]
      },
    ],
    names: [
      "Joyful",
      "Surprised",
      "Anxious",
      "Insecure",
      "Confident",
      "Excited",
      "Depressed",
      "Disappointed",
    ],
  };

  const options = {
    tooltips: {enabled: false},
    hover: {mode: null},
  }

  const chartRef = useRef();

  const onClick = (event) => {
    if (getElementsAtEvent(chartRef.current, event).length > 0) {
      const datasetIndexNumber = getElementsAtEvent(chartRef.current, event)[0]
        .datasetIndex;
      const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;

      console.log(`Dataset: ${datasetIndexNumber} and data: ${dataPoint}`);
      console.log(`Get Name: ${data.names[dataPoint]}`);

      setSelectedEmotions([...selectedEmotions, dataPoint]);
    }
  };

  return (
    <>
      <div style={styles.PieContainer}>
        <div style={styles.Pie}>
          <Pie
            data={data}
            options={options}
            onClick={onClick}
            ref={chartRef}
          ></Pie>
        </div>
      </div>
    </>
  );
}

export default FeelingCircle;
