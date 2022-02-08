import React from "react";
import CanvasJSReact from "../../../assets/charts/canvasjs.react";
import { Flex } from "@chakra-ui/react";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ColumnChart = ({
  anxiety_level,
  depressed_level,
  irritability_level,
  elevated_level,
}) => {
  const options = {
    theme: "light1",
    title: {
      text: "Moods Stats",
      Color: "purple",
    },

    animationEnabled: true,
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "doughnut",
        dataPoints: [
          { label: "Anxiety", y: anxiety_level },
          { label: "Depressed", y: depressed_level },
          { label: "Irritability", y: irritability_level },
          { label: "Elevated", y: elevated_level },
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

export default ColumnChart;
