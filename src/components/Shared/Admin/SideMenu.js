import React from "react";
import { useNavigate } from "react-router";
import { Container, Box, Button } from "@chakra-ui/react";

const SideMenu = () => {
  let navigate = useNavigate();

  return (
    <Container
      maxWidth="17rem"
      position="fixed"
      bgColor="blue.700"
      height="100%"
      ml={0}
    >
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
            navigate("/reports");
          }}
        >
          Dashboard
        </Button>
      </Box>
    </Container>
  );
};

export default SideMenu;
