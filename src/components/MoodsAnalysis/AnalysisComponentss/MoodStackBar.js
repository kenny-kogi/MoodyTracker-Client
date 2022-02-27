import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Flex } from "@chakra-ui/react";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const StackedBar = ({ moodData }) => {
  let labels = moodData.createdDates.map((dates) => {
    return dates;
  });
  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Depressed",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: moodData.depressedData.map((dep) => {
          return dep;
        }),
      },
      {
        type: "bar",
        label: "Irritability",
        backgroundColor: "rgb(75, 192, 192)",
        data: moodData.irritabilityData.map((irr) => {
          return irr;
        }),
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Anxiety",
        backgroundColor: "rgb(53, 162, 235)",
        data: moodData.anxietyData.map((anx) => {
          return anx;
        }),
      },
    ],
  };

  return (
    <Flex width={700} height={500}>
      <Chart type="bar" data={data} />
    </Flex>
  );
};

export default StackedBar;
