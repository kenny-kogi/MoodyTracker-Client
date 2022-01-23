import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        ml={6}
        mr={6}
      >
        <Box>
          <Image height="90px" src={Logo} alt="brand" />
        </Box>
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
          <Link to="/signup">
            <Button
              colorScheme="pink"
              size="lg"
              fontSize="lg"
              variant="ghost"
              fontWeight="bold"
            >
              Sign up
            </Button>
          </Link>
        </Box>
      </Box>
    </header>
  );
};
export default Navbar;
