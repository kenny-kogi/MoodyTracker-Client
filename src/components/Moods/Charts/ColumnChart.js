import React from "react";
import { Flex, Tag } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const ColumnChart = ({
  anxiety_level,
  depressed_level,
  irritability_level,
  elevated_level,
}) => {
  const moodRange = (v) => {
    let mood;

    if (v === 0) {
      mood = "None";
    } else if (v === 1) {
      mood = "Mild";
    } else if (v === 2) {
      mood = "Moderate";
    } else if (v === 3) {
      mood = "Severe";
    }

    return mood;
  };

  let data = {
    series: [
      (anxiety_level / 3) * 100,
      (depressed_level / 3) * 100,
      (irritability_level / 3) * 100,
      (elevated_level / 3) * 100,
    ],

    options: {
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              show: true,
              fontSize: "14px",
              formatter: function (val) {
                return moodRange(Math.ceil((val / 100) * 3));
              },
            },
            total: {
              show: true,
              label: "Moods",
              formatter: function (val) {
                return;
              },
            },
          },
        },
      },
      labels: ["Anxiety", "Depression", "Irritability", "Elevated"],
    },
  };

  return (
    <Flex width={200} height={200} mt={10} direction="column">
      <Tag textAlign="center" alignContent="center" bgColor="pink.100">
        Mood Records
      </Tag>
      <Chart
        options={data.options}
        series={data.series}
        type="radialBar"
        height={250}
      />
    </Flex>
  );
};

export default ColumnChart;
