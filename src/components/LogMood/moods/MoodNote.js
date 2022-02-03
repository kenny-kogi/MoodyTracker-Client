import React from "react";
import { Box, Textarea, Text } from "@chakra-ui/react";

const MoodNote = ({ value, handleMoodNoteChange }) => {
  return (
    <Box
      width="500px"
      height="150px"
      alignItems="center"
      justifyContent="center"
      p={15}
      border="1px solid purple.100"
      borderRadius={8}
      boxShadow="xl"
      mb={20}
      borderWidth={2}
    >
      <Text mb="8px">Add Today Notes:</Text>
      <Textarea
        value={value}
        onChange={handleMoodNoteChange}
        placeholder="Add a note"
        size="sm"
      />
    </Box>
  );
};

export default MoodNote;
