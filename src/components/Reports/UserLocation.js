import React from "react";
import Chart from "react-apexcharts";
import { Flex, Text } from "@chakra-ui/react";

const UserLocation = ({ location, user }) => {
  let series = [];
  let labels = [];

  // eslint-disable-next-line array-callback-return
  Object.entries(location).map((item) => {
    series.push(item[1]);
    labels.push(item[0]);
  });

  let data = {
    series: series,

    options: {
      labels: labels,
      chart: {
        type: "pie",
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "top",
            },
          },
        },
      ],
    },
  };

  return (
    <Flex
      width={400}
      height={400}
      mt={10}
      border="1px solid purple.100"
      borderRadius={8}
      boxShadow="lg"
      borderWidth={1}
      bgColor="whiteAlpha.600"
      ml="20px"
      direction="column"
    >
      <Text fontWeight="bold" textAlign="center">
        {user} Location Distribution
      </Text>

      <Flex mt={10}>
        <Chart
          options={data.options}
          series={data.series}
          type="pie"
          width={400}
        />
      </Flex>
    </Flex>
  );
};

export default UserLocation;
