import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Flex, Heading } from "@chakra-ui/react";

const AnxietyChart = ({ anxietyAvg }) => {
  let textMood;
  let pathColor;

  if (anxietyAvg === 0) {
    textMood = "None";
    pathColor = "grey";
  } else if (anxietyAvg === 1) {
    textMood = "Mild";
    pathColor = "yellow";
  } else if (anxietyAvg === 2) {
    textMood = "Moderate";
    pathColor = "blue.100";
  } else if (anxietyAvg === 3) {
    textMood = "Severe";
    pathColor = "red";
  }

  return (
    <Flex width={300} height={300} flexDirection="column" mt={10}>
      <Heading fontSize={20} textAlign="center" mb={5} textColor="purple.400">
        {textMood}
      </Heading>
      <CircularProgressbar
        value={anxietyAvg}
        strokeWidth={50}
        maxValue={3}
        minValue={0}
        styles={buildStyles({
          strokeLinecap: "butt",
          pathColor: pathColor,
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
    </Flex>
  );
};

export default AnxietyChart;
