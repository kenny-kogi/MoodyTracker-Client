import React from "react";
import CanvasJSReact from "../../../assets/charts/canvasjs.react";
import { Flex } from "@chakra-ui/react";
import { SleepingHoursData } from "../data/SleepingHoursData";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SleepingHoursChart = () => {
  SleepingHoursData();
  const options = {
    theme: "light1",
    title: {
      text: "Sleeping Hours",
      Color: "purple",
    },

    animationEnabled: true,
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
          //   { label: , y:  },
          //   { label: , y:  },
        ],
      },
    ],
  };

  return (
    <Flex width={400} height={300} m={10} flexDirection="column">
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </Flex>
  );
};

export default SleepingHoursChart;
