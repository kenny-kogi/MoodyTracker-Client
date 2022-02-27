import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Flex } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MoodIrritability = ({ irritabilityData }) => {
  const options = {
    responsive: true,
    elements: {
      line: {
        tension: 0.5, // disables bezier curves
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Irritability Mood Flunctuations",
      },
    },
  };

  let labels = irritabilityData.createdDates.map((dates) => {
    return dates;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: irritabilityData.irritabilityData.map((dep) => {
          return dep;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: true,
      },
    ],
  };
  return (
    <Flex width={700} height={400}>
      <Line options={options} data={data} />
    </Flex>
  );
};

export default MoodIrritability;
