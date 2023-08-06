import { useRef, useEffect } from "react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie, getElementsAtEvent } from "react-chartjs-2";
import ResultsPage from "../Results-component/results";
import styles from "./FeelingCircleStyles.jsx";

ChartJS.register(ArcElement, ChartDataLabels);

const FeelingCircle = ({
  selectedEmotions,
  setSelectedEmotions,
  renderResult,
  setRenderResult,
}) => {

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
          family: "Karla",
          size: "40px",
        },
        rotation: [
          "292", // Joyful, Confident
          "337", // Surprised, Excited
          "22", // Anxious, Depressed
          "67", // Insecure, Disappointed
        ],
        align: "center",
      },
    },
  };

  const chartRef = useRef();

  useEffect(() => {
    console.log("replaced array: ", selectedEmotions);
  }, [selectedEmotions]);

  const onClick = (event) => {
    if (getElementsAtEvent(chartRef.current, event).length > 0) {
      const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;

      if (selectedEmotions[1] !== data.titles[dataPoint]) {
        if (selectedEmotions.length < 2) {
          setSelectedEmotions([...selectedEmotions, data.titles[dataPoint]]);
        } else {
          setSelectedEmotions([selectedEmotions[1], data.titles[dataPoint]]);
        }
      }
    }
  };

  if (!renderResult) {
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
  } else {
    return (
        <ResultsPage
          selectedEmotions={selectedEmotions}
          setSelectedEmotions={setSelectedEmotions}
          setRenderResult={setRenderResult}
        />
    );
  }
};

export default FeelingCircle;
