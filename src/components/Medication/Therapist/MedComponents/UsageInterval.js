import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Flex } from "@chakra-ui/react";

const UsageInterval = ({ usageInterval }) => {
  let pathColor;

  if (usageInterval <= 3) {
    pathColor = "blue.100";
  } else if (usageInterval <= 5) {
    pathColor = "yellow";
  } else if (usageInterval <= 7) {
    pathColor = "orange";
  } else if (usageInterval >= 8) {
    pathColor = "red";
  }

  return (
    <Flex width={200} height={200}>
      <CircularProgressbar
        value={usageInterval}
        text={`${usageInterval} Per Day`}
        minValue={1}
        maxValue={10}
        circleRatio={0.75}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          strokeLinecap: "butt",
          pathColor: pathColor,
          trailColor: "#eee",
          textSize: "10px",
          textColor: "purple",
        })}
      />
    </Flex>
  );
};

export default UsageInterval;
