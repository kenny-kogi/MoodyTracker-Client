import React from "react";
import { Container, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ user_id }) => {
  let navigate = useNavigate();

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
          onClick={() => {
            navigate(`/moods/${user_id}`);
          }}
        >
          Moods Dashboard
        </Button>

        <Button
          mb={5}
          width="200px"
          height="60px"
          bgColor="purple.100"
          color="blackAlpha.700"
          _hover={{ bg: "purple", color: "white" }}
          fontWeight="bold"
          onClick={() => {
            navigate(`/mood/record`);
          }}
        >
          Log Mood
        </Button>

        <Button
          mb={5}
          width="200px"
          height="60px"
          bgColor="purple.100"
          color="blackAlpha.700"
          _hover={{ bg: "purple", color: "white" }}
          fontWeight="bold"
        >
          Reminders
        </Button>
        <Button
          width="200px"
          height="60px"
          bgColor="purple.100"
          color="blackAlpha.700"
          _hover={{ bg: "purple", color: "white" }}
          fontWeight="bold"
        >
          Moods Analysis
        </Button>
      </Box>
    </Container>
  );
};

export default SideMenu;
