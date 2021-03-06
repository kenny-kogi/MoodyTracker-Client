import React from "react";
import { Container, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  let navigate = useNavigate();

  return (
    <Container maxWidth="17rem" m={0} position="fixed">
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
            navigate("/therapist/dashboard");
          }}
        >
          Patients dashboard
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
            navigate("/therapist/profile");
          }}
        >
          Profile
        </Button>
      </Box>
    </Container>
  );
};

export default SideMenu;
