import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Flex } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const AverageChart = ({ hours_data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Hours Slept Chart",
      },
    },
  };

  const labels = hours_data.map((data) => {
    return data.label;
  });

  console.log(labels);
  const data = {
    labels,
    datasets: [
      {
        label: "Slept Hours",
        data: hours_data.map((data) => {
          return data.y;
        }),

        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Flex width={700} height={500} mt={15}>
      <Bar data={data} options={options} />
    </Flex>
  );
};

export default AverageChart;
