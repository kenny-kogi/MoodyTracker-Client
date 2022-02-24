import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Flex } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ averageMoodsData }) => {
  const data = {
    labels: Object.keys(averageMoodsData),
    datasets: [
      {
        label: "Doughnut Chart of Average Moods Level",
        data: Object.values(averageMoodsData),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Flex width={400} height={500}>
      <Doughnut data={data} />
    </Flex>
  );
};

export default DoughnutChart;
