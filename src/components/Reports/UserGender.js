import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const UserGender = ({ gender_data, user }) => {
  let series = [];
  let labels = [];

  // eslint-disable-next-line array-callback-return
  Object.entries(gender_data).map((item) => {
    series.push(item[1]);
    labels.push(item[0]);
  });

  let data = {
    series: series,

    options: {
      chart: {
        toolbar: {
          tools: {
            download: true,
          },
        },
      },
      labels: labels,
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return Math.round(val) + "%";
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: true,
        },
      },
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
      ml="42px"
      direction="column"
    >
      <Text fontWeight="bold" textAlign="center">
        {user} Gender Data
      </Text>

      <Flex mt={10}>
        <Chart options={data.options} series={data.series} type="donut" />
      </Flex>
    </Flex>
  );
};

export default UserGender;
