import React from "react";
import { Flex, Tag } from "@chakra-ui/react";

const MoodNote = ({ moodnote }) => {
  console.log(moodnote);
  return (
    <Flex direction="column" width={250} height={200} mt={10} overflow="scroll">
      <Tag textAlign="center" alignContent="center" bgColor="pink.100">
        Mood Notes
      </Tag>
      {/* <Badge
        textAlign="center"
        size="sm"
        height="20px"
        mt={5}
        bgColor="purple.100"
      >
        {moodnote}
      </Badge> */}

      {moodnote === null ? "" : moodnote}
    </Flex>
  );
};

export default MoodNote;
