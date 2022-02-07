import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HoursChart = () => {
  const hours_slept = 3;
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
      width={350}
      height={300}
      m={10}
      border="1px solid purple.100"
      borderRadius={8}
      boxShadow="xl"
      borderWidth={2}
      justifyContent="center"
    >
      <Box width={200} height={200}>
        <Text mb={10} fontSize="20px" textAlign="center">
          Hours Slept
        </Text>
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
