import React from "react";
import { useNavigate } from "react-router";
import { Container, Box, Heading, Text, Flex } from "@chakra-ui/react";

const SideMenu = () => {
  let navigate = useNavigate();

  return (
    <Container
      maxWidth="17rem"
      position="fixed"
      bgColor="rgb(30 41 59)"
      // opacity="10px"
      height="100%"
      p={0}
    >
      <Box flexDirection="column">
        <Heading
          fontSize="30px"
          color="whiteAlpha.700"
          cursor="pointer"
          p={5}
          onClick={() => {
            // navigate("/");
          }}
        >
          Moody Tracker
        </Heading>

        <Flex direction="column" mt={10} justifyContent="flex-start">
          <Text
            color="whiteAlpha.700"
            height="35px"
            pl="20px"
            _hover={{ color: "white" }}
            fontWeight="bold"
            onClick={() => {
              navigate("/reports");
            }}
            cursor="pointer"
          >
            Dashboard
          </Text>

          <Text
            color="whiteAlpha.700"
            height="35px"
            pl="20px"
            _hover={{ color: "white" }}
            fontWeight="bold"
            onClick={() => {
              // navigate("/reports");
            }}
            cursor="pointer"
          >
            Profile
          </Text>

          <Text
            color="whiteAlpha.700"
            height="35px"
            pl="20px"
            _hover={{ color: "white" }}
            fontWeight="bold"
            onClick={() => {
              // navigate("/reports");
            }}
            cursor="pointer"
          >
            Settings
          </Text>

          <Text
            color="whiteAlpha.700"
            height="35px"
            pl="20px"
            _hover={{ color: "white" }}
            fontWeight="bold"
            onClick={() => {
              // navigate("/reports");
            }}
            cursor="pointer"
          >
            Logout
          </Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default SideMenu;
