import React from "react";
import { Flex } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const MoodAnxiety = ({ anxietyData }) => {
  let labels = anxietyData.createdDates.map((dates) => {
    return dates;
  });

  const getMoodString = (v) => {
    let mood;

    if (v === 0) {
      mood = "None";
    } else if (v === 1) {
      mood = "Mild";
    } else if (v === 2) {
      mood = "Moderate";
    } else if (v === 3) {
      mood = "Severe";
    } else {
      mood = "";
    }
    return mood;
  };

  let data = {
    series: [
      {
        name: "Anxiety",
        data: anxietyData.anxietyData.map((anx) => {
          return anx;
        }),
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false,
        },
        toolbar: {
          tools: {
            download: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Anxiety Mood Fluctuations",
        align: "center",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "purple",
        },
      },
      labels: labels,
      xaxis: {
        type: "date",
      },
      yaxis: {
        show: true,
        showAlways: true,
        tickAmount: 6,
        min: 0,
        max: 3,
        forceNiceScale: false,
        floating: false,
        decimalsInFloat: undefined,
        opposite: false,
        labels: {
          show: true,
          align: "right",
          minWidth: 0,
          maxWidth: 160,
          style: {
            colors: [],
            fontSize: "12px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 400,
            cssClass: "apexcharts-yaxis-label",
          },
          offsetX: 0,
          offsetY: 0,
          rotate: 0,
          formatter: (value) => {
            return getMoodString(value);
          },
        },
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  };
  return (
    <Flex width={700} height={400}>
      <Chart options={data.options} series={data.series} type="area" />
    </Flex>
  );
};

export default MoodAnxiety;
