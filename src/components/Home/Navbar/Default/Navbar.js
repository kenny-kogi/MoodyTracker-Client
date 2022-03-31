import React from "react";
import { Button, Box, Image } from "@chakra-ui/react";
import Logo from "../../../../assets/logo.png";
import { useNavigate } from "react-router";

const NavbarDefault = () => {
  let navigate = useNavigate();

  return (
    <header>
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        ml={6}
        mr={6}
        zIndex="overlay"
      >
        <Box>
          <Image
            height="90px"
            src={Logo}
            alt="brand"
            onClick={() => {
              navigate("/");
            }}
            _hover={{ cursor: "pointer" }}
          />
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Button
            color="purple"
            size="lg"
            fontSize="lg"
            variant="link"
            fontWeight="bold"
            _hover={{
              color: "purple.600",
            }}
            mr={5}
            onClick={() => {
              //   navigate("/therapist/signup");
            }}
          >
            About
          </Button>

          <Button
            color="purple"
            size="lg"
            fontSize="lg"
            variant="link"
            fontWeight="bold"
            _hover={{
              color: "purple.600",
            }}
            mr={5}
            onClick={() => {
              //   navigate("/therapist/signup");
            }}
          >
            Features
          </Button>
          <Button
            color="purple"
            size="lg"
            fontSize="lg"
            variant="link"
            fontWeight="bold"
            _hover={{
              color: "purple.600",
            }}
            mr={5}
            onClick={() => {
              //   navigate("/therapist/login");
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </header>
  );
};

export default NavbarDefault;
