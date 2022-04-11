import React from "react";
import { Flex } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const StackedMoods = ({ anxiety, depressed }) => {
  //   let labels = depressed.createdDates.map((dates) => {
  //     return dates;
  //   });

  function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  console.log(
    generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
      min: 10,
      max: 60,
    })
  );

  let data = {
    series: [
      {
        name: "South",
        data: [
          ["Thur 20", 3],
          ["Thur 21", 3],
          ["Thur 22", 2],
          ["Thur 23", 1],
          ["Thur 24", 0],
        ],
      },
      {
        name: "North",
        data: [
          ["Thur 20", 3],
          ["Thur 21", 2],
          ["Thur 22", 0],
          ["Thur 23", 2],
          ["Thur 24", 3],
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        stacked: true,
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min));
          },
        },
      },
      colors: ["#008FFB", "#00E396"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        },
      },
      legend: {
        position: "top",
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

export default StackedMoods;
