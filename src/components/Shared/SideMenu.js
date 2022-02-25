import React from "react";
import { Container, Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  let navigate = useNavigate();

  return (
    <>
      <Container maxWidth="17rem" position="fixed">
        <Flex>
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
          {/* <Divider
            border="2px solid"
            borderColor="purple.100"
            orientation="vertical"
            height="1000px"
          /> */}
        </Flex>
      </Container>
    </>
  );
};

export default SideMenu;
