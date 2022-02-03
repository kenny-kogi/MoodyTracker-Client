import React from "react";
import { Box, Text, Switch } from "@chakra-ui/react";

const Psychotic = ({ checked, setChecked }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="300px"
      height="275px"
      border="1px solid purple.100"
      borderRadius={8}
      boxShadow="xl"
      borderWidth={2}
      mr={20}
      mb={20}
      p={5}
    >
      <Text mb={20}>Psychotic Symptoms:</Text>
      <Switch
        size="lg"
        colorScheme="purple"
        onChange={() => setChecked(!checked)}
      />
    </Box>
  );
};

export default Psychotic;
