import React from "react";
import { Flex, Text, Center } from "@chakra-ui/react";

const Prescription = ({ prescription }) => {
  return (
    <>
      <Flex
        border="1px solid purple.100"
        borderRadius={8}
        boxShadow="xl"
        borderWidth={2}
        width={400}
        height={200}
        justifyContent="center"
      >
        <Center>
          <Text> {prescription}</Text>
        </Center>
      </Flex>
    </>
  );
};

export default Prescription;
