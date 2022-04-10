import React from "react";
import { Flex } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const MultipleMoods = ({ anxiety, depressed, irritability, elevated }) => {
  let data = {
    series: [
      {
        name: "Depressed",
        data: depressed.depressedData.map((dep) => {
          return dep;
        }),
      },
      {
        name: "Anxiety",
        data: anxiety.anxietyData.map((anx) => {
          return anx;
        }),
      },
      {
        name: "Irritability",
        data: irritability.irritabilityData.map((irr) => {
          return irr;
        }),
      },
      {
        name: "Elevated",
        data: elevated.elevatedData.map((elv) => {
          return elv;
        }),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: "Radar Chart - Multi Series",
      },
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ["Depressed", "Anxiety", "Irritability", "Elevated"],
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

export default MultipleMoods;
