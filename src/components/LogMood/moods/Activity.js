import React from "react";
import { Box, Text, Textarea } from "@chakra-ui/react";

const Activity = ({ value, handleActivityChange }) => {
  return (
    <Box
      width="300px"
      height="275px"
      alignItems="center"
      justifyContent="center"
      p={15}
      border="1px solid purple.100"
      borderRadius={8}
      boxShadow="xl"
      mb={20}
      borderWidth={2}
    >
      <Text mb="8px">Current Activity:</Text>
      <Textarea
        value={value}
        onChange={handleActivityChange}
        placeholder="Add an activity"
        size="sm"
        height="150px"
      />
    </Box>
  );
};

export default Activity;
