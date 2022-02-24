import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Flex } from "@chakra-ui/react";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const AverageMoodsChart = ({ averageMoodsData }) => {
  const data = {
    labels: Object.keys(averageMoodsData),
    datasets: [
      {
        label: "Average Mood Levels",
        data: Object.values(averageMoodsData),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Flex width={500} height={500}>
      <Radar data={data} />
    </Flex>
  );
};

export default AverageMoodsChart;
