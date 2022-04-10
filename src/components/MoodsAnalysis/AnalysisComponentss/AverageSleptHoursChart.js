import React from "react";
import { Flex } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const AverageChart = ({ hours_data }) => {
  const labels = hours_data.map((data) => {
    return data.label;
  });

  let data = {
    series: [
      {
        data: hours_data.map((data) => {
          return data.y;
        }),
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "bar",
      },

      // eslint-disable-next-line array-callback-return
      colors: hours_data.map((data) => {
        if (data.y <= 4) {
          return "#E91E63";
        } else if (data.y <= 5) {
          return "#FF9800";
        } else if (data.y <= 7) {
          return "#2E93fA";
        } else if (data.y > 7) {
          return "#66DA26";
        }
      }),
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      title: {
        text: "Slept Hours Chart",
        align: "center",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "purple",
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: labels,
        labels: {
          style: {
            // colors: colors,
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        max: 10,
        min: 0,
      },
    },
  };

  return (
    <Flex width={700} height={300} mt={15}>
      <Chart options={data.options} series={data.series} type="bar" />
    </Flex>
  );
};

export default AverageChart;
