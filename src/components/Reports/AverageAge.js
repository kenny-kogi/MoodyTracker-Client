import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Chart from "react-apexcharts";

const AverageAge = ({ users, patients }) => {
  let total = users + patients;
  let data = {
    series: [users, patients],

    options: {
      labels: ["Users", "Patients"],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return Math.round((val / 100) * total) + "yrs";
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
        Average Age of Users and Patients
      </Text>

      <Flex mt={10}>
        <Chart options={data.options} series={data.series} type="donut" />
      </Flex>
    </Flex>
  );
};

export default AverageAge;
