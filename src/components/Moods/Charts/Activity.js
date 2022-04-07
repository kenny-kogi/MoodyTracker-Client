import React from "react";
import { Badge, Flex, Tag } from "@chakra-ui/react";

const Activity = ({ activity }) => {
  console.log(activity);
  return (
    <Flex direction="column" width={150} height={300} mt={10}>
      <Tag textAlign="center" alignContent="center" bgColor="pink.100">
        Activity
      </Tag>
      <Badge
        textAlign="center"
        size="sm"
        height="20px"
        mt={5}
        bgColor="purple.100"
      >
        {activity === null ? "None" : activity}
      </Badge>
    </Flex>
  );
};

export default Activity;
