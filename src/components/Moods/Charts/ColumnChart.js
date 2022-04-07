import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Flex } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const ColumnChart = ({
  anxiety_level,
  depressed_level,
  irritability_level,
  elevated_level,
}) => {
  const data = {
    labels: ["Anxiety", "Depressed", "Irritability", "Elevated"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          anxiety_level,
          depressed_level,
          irritability_level,
          elevated_level,
        ],
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
    <Flex width={220} height={300} mt={10}>
      <Pie data={data} />
    </Flex>
  );
};

export default ColumnChart;
