import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const MentalFacility = ({ mental_facility_data }) => {
  let series = [];
  let labels = [];

  // eslint-disable-next-line array-callback-return
  Object.entries(mental_facility_data).map((item) => {
    series.push(item[1]);
    labels.push(item[0]);
  });

  let data = {
    series: [
      {
        name: "Mental Facility",
        data: series,
      },
    ],
    options: {
      labels: labels,
      chart: {
        type: "bar",
        height: 200,
        toolbar: {
          tools: {
            download: true,
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: labels,
      },
    },
  };

  return (
    <Flex
      width={450}
      height={350}
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
        Mental Facility Distribution
      </Text>

      <Flex mt={10}>
        <Chart options={data.options} series={data.series} type="bar" />
      </Flex>
    </Flex>
  );
};

export default MentalFacility;
