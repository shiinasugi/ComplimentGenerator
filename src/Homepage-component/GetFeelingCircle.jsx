import { useRef, useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie, getElementsAtEvent } from "react-chartjs-2";
import styles from "./FeelingCircleStyles.jsx";

ChartJS.register(ArcElement, ChartDataLabels);

function FeelingCircle() {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [isTwoSelected, setIsTwoSelected] = useState(false); // use in Homepage component

  useEffect(() => {
    if (selectedEmotions.length === 2) {
      setIsTwoSelected(true);
    }
  }, [selectedEmotions]);

  const data = {
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1],
        borderColor: "white",
        backgroundColor: ["#E27D5F", "#85CDCA", "#C38D9D", "#40B3A2"],
      },
    ],
    titles: [
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
    plugins: {
      datalabels: {
        color: "white",
        formatter: (ctx, args) => {
          return data.titles[args.dataIndex];
        },
        font: {
          family: "Karla, sans-serif",
          size: "30px",
        },
        rotation: [
          "295", // Joyful, COnfident
          "340", // Surprised, Excited
          "25", // Anxious, Depressed
          "70", // Insecure, Disappointed
        ],
      },
    },
  };

  const chartRef = useRef();

  const onClick = (event) => {
    if (getElementsAtEvent(chartRef.current, event).length > 0) {
      const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;

      console.log(`Get Name: ${data.titles[dataPoint]}`);

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
