import React from "react";
import { Box } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HoursChart = () => {
  const hours_slept = 6;
  return (
    <Box width={250} height={250} m={20}>
      <Box width={200} height={200}>
        <CircularProgressbar
          value={hours_slept}
          text={`${hours_slept} Hrs Slept`}
          minValue={1}
          maxValue={10}
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "12px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: "pink",
            textColor: "purple",
            trailColor: "#d6d6d6",
            backgroundColor: "pink",
          })}
        />
        ;
      </Box>
    </Box>
  );
};

export default HoursChart;
