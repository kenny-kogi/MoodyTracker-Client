import React from "react";
import { Box, Text, Switch } from "@chakra-ui/react";

const Psychotic = ({ checked, setChecked }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="200px"
      height="100px"
      alignItems="center"
      textAlign="center"
      mr={20}
      mt={20}
      justifyContent="space-between"
    >
      <Text>Psychotic Symptoms:</Text>
      <Switch
        size="lg"
        colorScheme="purple"
        onChange={() => setChecked(!checked)}
      />
    </Box>
  );
};

export default Psychotic;
