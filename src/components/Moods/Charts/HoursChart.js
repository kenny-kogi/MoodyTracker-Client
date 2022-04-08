import React from "react";
import { Box, Tag, Flex } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HoursChart = ({ hours_slept }) => {
  let pathColor;

  if (hours_slept <= 3) {
    pathColor = "red";
  } else if (hours_slept <= 5) {
    pathColor = "yellow";
  } else if (hours_slept <= 7) {
    pathColor = "orange";
  } else {
    pathColor = "green";
  }
  return (
    <Flex
      width={150}
      height={200}
      mt={10}
      justifyContent="center"
      alignContent="center"
    >
      <Box width={200} height={200}>
        <Tag bgColor="pink.100" mb={9}>
          Hours Slept
        </Tag>
        <CircularProgressbar
          value={hours_slept}
          text={`${hours_slept} Hrs Slept`}
          minValue={1}
          maxValue={10}
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "12px",
            pathTransitionDuration: 0.5,
            pathColor: pathColor,
            textColor: "purple",
            trailColor: "#d6d6d6",
            backgroundColor: "pink",
          })}
        />
        ;
      </Box>
    </Flex>
  );
};

export default HoursChart;
