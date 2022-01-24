import React from "react";
import { Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const LoginNavbar = () => {
  return (
    <header>
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        ml={6}
        mr={6}
      >
        <Link to="/">
          {" "}
          <Box>
            <Image height="90px" src={Logo} alt="brand" />
          </Box>
        </Link>
        <Box>
          <Link to="/login">
            <Button
              p={3}
              colorScheme="purple"
              size="lg"
              fontSize="lg"
              variant="ghost"
              mr={2}
              fontWeight="bold"
            >
              Log in
            </Button>
          </Link>
        </Box>
      </Box>
    </header>
  );
};

export default LoginNavbar;
