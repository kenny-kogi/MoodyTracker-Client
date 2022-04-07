import React from "react";
import { Flex } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const DoughnutChart = ({ averageMoodsData }) => {
  const moodAverageString = (v) => {
    let mood;

    if (v === 1) {
      mood = "Mild";
    } else if (v === 2) {
      mood = "Moderate";
    } else if (v === 3) {
      mood = "Severe";
    }

    return mood;
  };

  let data = {
    series: Object.values(averageMoodsData),
    options: {
      labels: Object.keys(averageMoodsData),
      chart: {
        width: 580,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return (
            val +
            " - " +
            moodAverageString(opts.w.globals.series[opts.seriesIndex])
          );
        },
        position: "bottom",
      },
      title: {
        text: "Average Mood Levels",
        align: "center",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "purple",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <Flex width={300} height={500}>
      <Chart
        options={data.options}
        series={data.series}
        type="donut"
        height={450}
      />
    </Flex>
  );
};

export default DoughnutChart;
