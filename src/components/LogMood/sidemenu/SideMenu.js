import React from "react";
import { Container, Box, Button } from "@chakra-ui/react";

const SideMenu = () => {
  return (
    <Container maxWidth="17rem" m={0}>
      <Box flexDirection="column" p={5}>
        <Button
          mb={5}
          width="200px"
          height="60px"
          bgColor="purple.100"
          color="blackAlpha.700"
          _hover={{ bg: "purple", color: "white" }}
          fontWeight="bold"
        >
          Moods Dashboard
        </Button>

        <Button
          width="200px"
          height="60px"
          bgColor="purple.100"
          color="blackAlpha.700"
          _hover={{ bg: "purple", color: "white" }}
          fontWeight="bold"
        >
          Log Mood
        </Button>
      </Box>
    </Container>
  );
};

export default SideMenu;
