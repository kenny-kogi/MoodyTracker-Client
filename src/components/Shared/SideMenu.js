import React from "react";
import { Container, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  let navigate = useNavigate();

  return (
    <Container maxWidth="17rem" m={0}>
      <Box flexDirection="column" p={5}>
        <Button
          width="200px"
          height="60px"
          bgColor="purple.100"
          color="blackAlpha.700"
          _hover={{ bg: "purple", color: "white" }}
          fontWeight="bold"
          mb={5}
          onClick={() => {
            navigate("/moods/dashboard");
          }}
        >
          Moods dashboard
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
            navigate("/mood/record");
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
          mb={5}
          width="200px"
          height="60px"
          bgColor="purple.100"
          color="blackAlpha.700"
          _hover={{ bg: "purple", color: "white" }}
          fontWeight="bold"
          onClick={() => {
            navigate("/moods");
          }}
        >
          Daily Logs
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
            navigate("/moods");
          }}
        >
          Profile
        </Button>
      </Box>
    </Container>
  );
};

export default SideMenu;
