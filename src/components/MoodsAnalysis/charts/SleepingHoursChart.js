import React from "react";
import CanvasJSReact from "../../../assets/charts/canvasjs.react";
import { Flex } from "@chakra-ui/react";
import { GetSleepingHoursData } from "../data/data";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SleepingHoursChart = () => {
  let hours_slept_list = GetSleepingHoursData().hours_slept;
  let date_created_list = GetSleepingHoursData().date_created;

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
        type: "doughnut",
        dataPoints: [{ label: date_created_list, y: hours_slept_list }],
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
