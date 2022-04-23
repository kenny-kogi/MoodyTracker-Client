import React from "react";
import { Flex } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const AverageMoodsChart = ({ averageMoodsData }) => {
  let data = {
    series: [
      {
        name: "Moods",
        data: Object.values(averageMoodsData),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
        toolbar: {
          tools: {
            download: false,
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#f8f8f8", "#fff"],
            },
          },
        },
      },
      title: {
        text: "Average Mood Levels Radar Chart",
        align: "center",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "purple",
        },
      },
      colors: ["#FF4560"],
      markers: {
        enabled: false,
        size: 4,
        colors: ["#fff"],
        strokeColor: "#FF4560",
        strokeWidth: 2,
      },

      xaxis: {
        categories: Object.keys(averageMoodsData),
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          show: false,
          formatter: function (val, i) {
            return;
          },
        },
      },
    },
  };

  return (
    <Flex width={500} height={500}>
      <Chart
        options={data.options}
        series={data.series}
        type="radar"
        height={450}
      />
    </Flex>
  );
};

export default AverageMoodsChart;
