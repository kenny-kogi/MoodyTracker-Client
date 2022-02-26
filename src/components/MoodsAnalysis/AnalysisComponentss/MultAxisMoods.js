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

const MultiAxis = ({ moodData }) => {
  const options = {
    responsive: true,
    elements: {
      line: {
        tension: 0.1, // disables bezier curves
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Multi Axis",
      },
    },

    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  let labels = moodData.createdDates.map((dates) => {
    return dates;
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Depressed",
        data: moodData.depressedData.map((dep) => {
          return dep;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Anxiety",
        data: moodData.anxietyData.map((anx) => {
          return anx;
        }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },

      {
        label: "Irritability",
        data: moodData.irritabilityData.map((irr) => {
          return irr;
        }),
        borderColor: "purple",
        backgroundColor: "purple",
        yAxisID: "y1",
      },

      {
        label: "Elevated",
        data: moodData.elevatedData.map((elv) => {
          return elv;
        }),
        borderColor: "green",
        backgroundColor: "green",
        yAxisID: "y1",
      },
    ],
  };
  return (
    <Flex width={700} height={500}>
      <Line options={options} data={data} />
    </Flex>
  );
};

export default MultiAxis;
