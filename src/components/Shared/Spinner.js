import React from "react";
import { CircularProgress, Flex } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <Flex justifyItems="center" mt={40}>
      <CircularProgress isIndeterminate color="purple"></CircularProgress>;
    </Flex>
  );
};

export default Spinner;
